import axios from "axios";
import { BASE_URL } from "../../constants/url";

export const login = async (form, navigate) => {
    try {
        const body = {
            email: form.email,
            password: form.password,
        };

        const response = await axios.post(BASE_URL + "/users/login", body);
        const token = response.data.token;

        window.localStorage.setItem("token", token);
        navigate("/PostPage");
        
    } catch (error) {
        console.error(error?.response?.data);
        window.alert(error?.response?.data);
        window.alert("Senha inválida!");
    }
};
