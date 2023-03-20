import axios from "axios";
import { useContext, useState } from "react"


import IconCancel from "./../../img/cancel.png"
import balloonchat from "./../../img/balloonchat.png"
import like from "./../../img/like.png"
import dislike from "./../../img/dislike.png"
import { BASE_URL } from "../../constants/url"
import { Container, CardContainer } from "./SubPostPage.Styled";
import { logoutAccount } from "../../actions/logout/logout";
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToPostPage, goToSubPostPage } from "../../routes/coordinator";
import SubPostCard from "../../components/postCard/subPostCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { likePost } from "../../actions/likesAndDislikes/likes";
import { dislikePost } from "../../actions/likesAndDislikes/dislikes";
import { Card } from "../../components/postCard/postCard.Styled";




export default function SubPostPage() {
    const { idSubPost, post } = useContext(GlobalContext)
    const [subPost, setSubPost] = useState([])
    const [newSubPost, setNewSubPost] = useState("");
    const navigate = useNavigate();

    const fetchSubPost = async (idToFind) => {
        try {
            const token = window.localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: token
                }
            };
            const response = await axios.get(BASE_URL + `/post/${idToFind}/subpost`, config)
            setSubPost(response.data)
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
        fetchSubPost(idSubPost);
    }

    const createSubPost = async (e) => {
        if (newSubPost.length === 0) {
            window.alert("Escreva algo criaturaaa")
        } else {
            e.preventDefault()
            try {
                const idToFind = idSubPost
                const token = window.localStorage.getItem('token');
                const config = {
                    headers: {
                        Authorization: token
                    },
                    params: {
                        id: idToFind
                    }
                };
                const body = {
                    context: newSubPost
                }

                await axios.post(BASE_URL + `/post/${idToFind}/subpost`, body, config)

                setNewSubPost("")
                goToSubPostPage(navigate, idToFind)

            } catch (error) {
                console.error(error)
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
                    onClick={() => goToPostPage(navigate)}
                    src={IconCancel}
                    alt="CancelBotton"
                />
                <button onClick={() => logoutAccount(navigate)}>Logout</button>
            </div>

            <div className="ContainerSubPost">
                <Card>
                    <p className="Title">enviado por: {post.creator.name}</p>
                    <p className="Context">{post.context}</p>
                    <div className="BottonContainer">
                        <div className="FirstBalloon">
                            <img src={like} alt="Like" onClick={() => likePost(post.id)} />
                            <p>{post.likes}</p>
                            <img src={dislike} alt="dislike" onClick={() => dislikePost(post.id)} />
                        </div>
                        <div className="SecondBallon">
                            <img src={balloonchat} alt="balloon"/>
                            <p>{post.subPosts.length}</p>
                        </div>
                    </div>
                </Card>
            </div>

            <form onSubmit={createSubPost}>
                <section>
                    <textarea
                        type="text"
                        value={newSubPost}
                        placeholder={"adicionar comentário"}
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
                        onChange={(e) => setNewSubPost(e.target.value)}>
                    </textarea>
                </section>
                <button>Postar</button>
            </form>

            <div className="Line"></div>
            <CardContainer>
                {subPost.map((e) => {
                    return <SubPostCard
                        key={e.id}
                        post={e}
                    />
                })}
            </CardContainer>
        </Container>
    )
}