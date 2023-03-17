import axios from "axios";
import { useEffect, useState } from "react"


import PostCard from "../../components/postCard/postCard";
import Logotop from "./../../img/logoTop.png"
import IconCancel from "./../../img/cancel.png"

import { BASE_URL } from "../../constants/url"
import { Container, CardContainer } from "./PostPage.Styled";
import { logoutAccount } from "../../actions/logout/logout";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";
import SubPostCard from "../../components/postCard/subPostCard";



export default function PostPage() {
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [newPost, setNewPost] = useState("");
    const [subPost, setSubPost] = useState(false);
    const [renderText, setRenderText] = useState("");
    const [subPostText, setSubPostText] = useState([]);
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

    useEffect((navigate) => {
        const token = window.localStorage.getItem('token');
        if (!token) {
            window.alert("token não existe")
            goToLoginPage(navigate)
        } else {
            fetchPost();
        }
    }, [post]);


    console.log(post)
    console.log(subPostText)

    const createPost = async (e) => {
        if (newPost.length === 0) {
            window.alert("Escreva algo criaturaaa")
        } else {

            e.preventDefault()

            setIsLoading(true)

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
                setIsLoading(false)
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
                <img 
                className="CancelLogo" 
                onClick={() => setSubPost(false)}
                src={IconCancel} 
                alt="CancelBotton"
                style={{ display: subPost ? "block" : "none" }}
                />
                <img className="logoTop" src={Logotop} alt="logoTop" />
                <button onClick={() => logoutAccount(setIsLoading, navigate, setSubPost)}>Logout</button>
            </div>
            <div
                className="ContainerSubPost"
                style={{ display: subPost ? "block" : "none" }}>
                    <p>{renderText}</p>
            </div>
            <form
                onSubmit={createPost}>
                <section>
                    <textarea
                        type="text"
                        value={newPost}
                        placeholder={subPost ? "escreva seu post..." : "adicionar comentário"}
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
                <button disabled={isLoading}>Postar</button>
            </form>

            <div className="Line"></div>
            <CardContainer style={{ display: subPost ? "none" : "block" }}>
                {post.map((e) => {
                    return <PostCard
                        key={e.id}
                        post={e}
                        setRenderText={setRenderText}
                        subPost={subPost}
                        setSubPost={setSubPost}
                        setSubPostText={setSubPostText}
                    />
                })}
            </CardContainer>
            <CardContainer style={{ display: subPost ? "block" : "none" }}>
                {subPostText.map((e)=>{
                    return <SubPostCard 
                        key={e.id}
                        post={e}
                    />
                })}
            </CardContainer>
        </Container>
    )
}