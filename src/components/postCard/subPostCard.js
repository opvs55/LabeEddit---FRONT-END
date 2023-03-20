import { Card } from "./postCard.Styled";
import like from "./../../img/like.png";
import dislike from "./../../img/dislike.png";
import { dislikeSubPost } from "../../actions/likesAndDislikesSubPost/dislikesSubPost";
import { likeSubPost } from "../../actions/likesAndDislikesSubPost/likesSubPost";






export default function SubPostCard(props) {
    const { post} = props;

    const postId = post.id
    return (
        <Card>
            <p className="Title">enviado por {post.creator_name}</p>
            <p className="Context">{post.context}</p>
            <div className="BottonContainer">
                <div className="FirstBalloon">
                    <img src={like} alt="Like" onClick={() => likeSubPost(postId)} />
                    <p>{post.likes}</p>
                    <img src={dislike} alt="dislike" onClick={() => dislikeSubPost(postId)} />
                </div>
            </div>
        </Card>
    )
}