import { goToLoginPage } from "../../routes/coordinator";


export const logoutAccount = async (setIsLoading, navigate) => {

    
    try {
        setIsLoading(true);

        window.localStorage.removeItem("token");

        setIsLoading(false);
        
        
        return goToLoginPage(navigate);
    } catch (error) {
        setIsLoading(false);
        console.error(error?.response?.data);
        window.alert(error?.response?.data);
    }
};
