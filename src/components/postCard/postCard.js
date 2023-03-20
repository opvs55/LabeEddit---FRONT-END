import { Card } from "./postCard.Styled";
import like from "./../../img/like.png"
import dislike from "./../../img/dislike.png"
import balloonchat from "./../../img/balloonchat.png"
import { likePost } from "../../actions/likesAndDislikes/likes";
import { dislikePost } from "../../actions/likesAndDislikes/dislikes";
import { goToSubPostPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";







export default function PostCard(props) {
    const { setIdSubPost, setPost} = useContext(GlobalContext)



    
    const navigate = useNavigate();
    
    const {
        post
    } = props;


    const subPostAction = () => {
        setIdSubPost(post.id)
        goToSubPostPage(navigate, post.id)
        setPost(post)
    }

    

    return (
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
                    <img src={balloonchat} alt="balloon" onClick={subPostAction} />
                    <p>{post.subPosts.length}</p>
                </div>
            </div>
        </Card>
    )
}