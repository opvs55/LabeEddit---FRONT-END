import axios from "axios";
import { BASE_URL } from "../../constants/url";

export const likeSubPost = async (postId) => {
    try {

        const token = window.localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: token
            },

            params:{
                id: postId
            }
        };
        const body = {
            "like": true
        }
        await axios.put(`${BASE_URL}/post/${postId}/subpost/like`, body, config);
    } catch (error) {
        console.error(error?.response?.data)
        window.alert(error?.response?.data)
    }

}


