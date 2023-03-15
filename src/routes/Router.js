import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignupPage from "../pages/SignupPage/SignupPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/postPage" element={<PostPage/>} />
      </Routes>
    </BrowserRouter>
  );
}


//Poderia criar uma lógica para homePage
//Quando estiver na homePage e o token não existir
//Mostrar X coisas
//Quando tiver com o token, mostrar outras coisas, mostrar botão deslogar
//tirar botão entrar