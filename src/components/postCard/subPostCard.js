import { Card } from "./postCard.Styled";
import like from "./../../img/like.png";
import dislike from "./../../img/dislike.png";
import { likePost } from "../../actions/likesAndDislikes/likes";
import { dislikePost } from "../../actions/likesAndDislikes/dislikes";





export default function SubPostCard(props) {


    const {
        post
    } = props;


    const postId = post.id


    return (
        <Card>
            <p className="Title">enviado por</p>
            <p className="Context">{post.context}</p>
            <div className="BottonContainer">
                <div className="FirstBalloon">
                    <img src={like} alt="Like" onClick={() => likePost(postId)} />
                    <p>{post.likes}</p>
                    <img src={dislike} alt="dislike" onClick={() => dislikePost(postId)} />
                </div>
            </div>
        </Card>
    )
}