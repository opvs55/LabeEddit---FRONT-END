import axios from "axios";
import { BASE_URL } from "../../constants/url";

export const dislikePost = async (postId) => {


    try {

        const token = window.localStorage.getItem('token');

        console.log(token)
        const config = {
            headers: {
                Authorization: token
            },

            params:{
                id: postId
            }
        };
        const body = {
            "like": false
        }
        await axios.put(`${BASE_URL}/post/${postId}/like`, body, config);
    } catch (error) {
        console.error(error?.response?.data)
        window.alert(error?.response?.data)
    }

}
