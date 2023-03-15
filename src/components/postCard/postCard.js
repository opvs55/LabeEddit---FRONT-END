import { Card } from "./postCard.Styled";
import like from "./../../img/like.png"
import dislike from "./../../img/dislike.png"
import balloonchat from "./../../img/balloonchat.png"
import { likePost } from "../../actions/likesAndDislikes/likes";





export default function PostCard(props){


    const {post} = props;
    const postId = post.id

    return (
        <Card>
                <p className="Title">enviador por: {post.creator.name}</p>
                <p className="Context">{post.context}</p>
                <div className="BottonContainer">
                    <div className="FirstBalloon">
                        <img src={like} alt="Like" onClick={() => likePost(postId)}/>
                        <p>{post.likes}</p>
                        <img src={dislike} alt="dislike" />
                    </div>
                    <div className="SecondBallon">
                        <img src={balloonchat} alt="balloon"/>
                        <p>{post.subPosts.length}</p>
                    </div>
                </div> 
        </Card>
    )
}