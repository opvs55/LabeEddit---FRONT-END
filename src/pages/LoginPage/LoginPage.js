import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/login/loginAction";
import { goToSignupPage } from "../../routes/coordinator";
import { changeForm } from "../../actions/changeForm/formUtils";
import { LoginContainer } from "./LoginPage.Styled";
import LogoLogin from "./../../img/LogoLogin.png"

export default function LoginPage() {

  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    login(form, navigate);
  };

  return (
    <LoginContainer>
        <div className="LogoContainer">
          <img className="LogoLogin" src={LogoLogin} alt="Login"/>
          <h2 className="TittleLogo">LabEddit</h2>
          <p className="subTittleLogo">O projeto de rede social da Labenu</p>
        </div>
        <article>
          <form onSubmit={handleLogin} autoComplete="off">
            <section>
              <input
                placeholder="Email"
                name={"email"}
                value={form.email}
                onChange={(event) => changeForm(event, form, setForm)}
              />
            </section>

            <section>
              <input
                className="input2"
                placeholder="Senha"
                name={"password"}
                value={form.password}
                onChange={(event) => changeForm(event, form, setForm)}
              />
            </section>
            <button className="Login">Continuar</button>
          </form>
          <div className="Line"></div>
          <h2>
            <button className="NewAccountButton" onClick={() => goToSignupPage(navigate)}>
              Crie uma conta
            </button>
          </h2>
        </article>
    </LoginContainer>
  );
}
