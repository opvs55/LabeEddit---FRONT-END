import axios from "axios";
import { BASE_URL } from "../../constants/url";



export const signup = async (form, navigate) => {
    try {
        const body = {
            name: form.name,
            email: form.email,
            password: form.password
        };
        //enviado solicitação
        const response = await axios.post(BASE_URL + "/users/signup", body);


        //Pegando valor do token e guardando no localStorage
        const token = response.data.token;
        window.localStorage.setItem('token', token);


        //Se tudo ocorreu bem, vá para.

        navigate("/PostPage");

    } catch (error) {
        console.error(error?.response?.data);
        window.alert(error?.response?.data)

    }
};