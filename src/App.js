import { GlobalStyle } from "./CreateGlobalStyled";
import Router from "./routes/Router";

export default function App() {


  
  // useEffect(() => {
  //   fetchPost();
  // }, []);

  // const fetchPost = async () => {
  //   try {
  //     const response = await axios.get(BASE_URL);
  //     console.log(response)
  //     setPost(response.data);
  //   } catch (error) {
  //     console.log("Erro ao buscar usuários");
  //     console.log(error);
  //   }
  // };


  // const createPost = async (e) => {
  //   e.preventDefault()

  //   setIsLoading(true)

  //   try {

  //     const body = {
  //       mensagem: newPost
  //     }

  //     await axios.post(BASE_URL, body);

  //     setNewPost("");
  //     setIsLoading(false)
  //     fetchPost()
  //   } catch (error) {
  //     console.error(error?.response?.data);
  //     window.alert(error?.response?.data)
  //   }
  // };

  // const context = {
  //   createPost,
  //   fetchPlaylists
  // };

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}