import { GlobalStyle } from "./CreateGlobalStyled";
import Router from "./routes/Router";
import { GlobalContext } from "./contexts/GlobalContext";
import { useState } from "react";

export default function App() {


//loading
const [isLoading, setIsLoading] = useState(false);
const [idSubPost, setIdSubPost] = useState("")
const [post, setPost] = useState([])


  const context = {
    isLoading,
    setIsLoading,
    idSubPost,
    setIdSubPost,
    post,
    setPost
  }

  return (
    <>
      <GlobalStyle />
        <GlobalContext.Provider value={context}>
          <Router />
        </GlobalContext.Provider>
    </>
  );
}