import { GlobalStyle } from "./CreateGlobalStyled";
import Router from "./routes/Router";
import { GlobalContext } from "./contexts/GlobalContext";
import { useState } from "react";

export default function App() {


//loading
const [isLoading, setIsLoading] = useState(false);


  const context = {
    isLoading,
    setIsLoading,
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