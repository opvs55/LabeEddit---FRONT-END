import { goToLoginPage } from "../../routes/coordinator";


export const logoutAccount = async (navigate) => {
    try {
        window.localStorage.removeItem("token");
        return goToLoginPage(navigate);
    } catch (error) {
        console.error(error?.response?.data);
        window.alert(error?.response?.data);
    }
};
