import { Card } from "./postCard.Styled";
import like from "./../../img/like.png"
import dislike from "./../../img/dislike.png"
import balloonchat from "./../../img/balloonchat.png"
import { likePost } from "../../actions/likesAndDislikes/likes";
import { dislikePost } from "../../actions/likesAndDislikes/dislikes";





export default function PostCard(props) {


    const {
        post,
        setRenderText,
        subPost,
        setSubPost,
        setSubPostText
    } = props;


    const postId = post.id

    const subPostAction = () => {
        setRenderText(post.context)
        setSubPostText(post.subPosts)
        if(subPost === true){
            setSubPost(!true)
        } else {
            setSubPost(!false)
        }
    }

    return (
        <Card>
            <p className="Title">enviado por: {post.creator.name}</p>
            <p className="Context">{post.context}</p>
            <div className="BottonContainer">
                <div className="FirstBalloon">
                    <img src={like} alt="Like" onClick={() => likePost(postId)} />
                    <p>{post.likes}</p>
                    <img src={dislike} alt="dislike" onClick={() => dislikePost(postId)} />
                </div>
                <div className="SecondBallon">
                    <img src={balloonchat} alt="balloon" onClick={subPostAction} />
                    <p>{post.subPosts.length}</p>
                </div>
            </div>
        </Card>
    )
}