import axios from "axios";
import { useEffect, useState } from "react"
import PostCard from "../../components/postCard/postCard";
import Logotop from "./../../img/logoTop.png"
import { BASE_URL } from "../../constants/url"
import { Container, CardContainer } from "./PostPage.Styled";
import { logoutAccount } from "../../actions/logout/logout";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";



export default function PostPage() {
    const [post, setPost] = useState([]);
    const [newPost, setNewPost] = useState("");
    const navigate = useNavigate();


    const fetchPost = async () => {
        try {
            const token = window.localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: token
                }
            };
            const response = await axios.get(BASE_URL + "/post", config)
            setPost(response.data)
        } catch (error) {
            console.log("Error ao buscar postagens")
            console.log(error);
        }
    }

    const token = window.localStorage.getItem('token');
    if (!token) {
        window.alert("token não existe")
        goToLoginPage(navigate)
    } else {
        fetchPost();
    }


    useEffect(() => {
        const intervalId = setInterval(() => {
            fetchPost();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


    const createPost = async (e) => {
        if (newPost.length === 0) {
            window.alert("Escreva algo criaturaaa")
        } else {
            e.preventDefault()
            try {

                const token = window.localStorage.getItem('token');
                const config = {
                    headers: {
                        Authorization: token
                    }
                };

                const body = {
                    context: newPost
                }


                await axios.post(BASE_URL + "/post", body, config)

                setNewPost("")
                fetchPost()

            } catch (error) {
                console.error(error?.response?.data)
                window.alert(error?.response?.data)
            }

        }
    }

    return (
        <Container>
            <div className="ContainerTop">
                <img className="logoTop" src={Logotop} alt="logoTop" />
                <button onClick={() => logoutAccount(navigate)}>Logout</button>
            </div>
            <form
                onSubmit={createPost}>
                <section>
                    <textarea
                        type="text"
                        value={newPost}
                        placeholder={"escreva seu post..."}
                        style={{
                            width: '364px',
                            height: '131px',
                            borderRadius: '12px',
                            backgroundColor: '#EDEDED',
                            border: '0px solid white',
                            padding: '10px',
                            resize: 'none',
                            fontSize: "18px"
                        }}
                        onChange={(e) => setNewPost(e.target.value)}>
                    </textarea>
                </section>
                <button>Postar</button>
            </form>

            <div className="Line"></div>
            <CardContainer>
                {post.map((e) => {
                    return <PostCard
                        key={e.id}
                        post={e}
                    />
                })}
            </CardContainer>
        </Container>
    )
}