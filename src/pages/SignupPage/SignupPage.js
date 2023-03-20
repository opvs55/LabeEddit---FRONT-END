import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeForm } from "../../actions/changeForm/formUtils";
import { isValidEmail } from "../../actions/formBusiness/email";
import { isValidPassword } from "../../actions/formBusiness/password";
import { signup } from "../../actions/signup/signupAction";
import { SignUpContainer } from "./SignUpPage.Styled";


import Logotop from "./../../img/logoTop.png"


export default function SignupPage() {

  const navigate = useNavigate();

  //Valores do input
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });


  const handleSignUp = (event) => {
    event.preventDefault();
    if (!isValidEmail(form.email)) {
      alert("por favor, insira um endereço de e-mail válido")
    } if (!isValidPassword(form.password)) {
      alert("8 caracteres, uma letra minúscula e maiúscula, um número, um caractere especial")
    } else {
      signup(form,  navigate);
    }
  };


  return (
    <SignUpContainer>
      <div className="ContainerTop">
        <img className="LogoTop" src={Logotop} alt="LogoTopLabenu" />
        <button onClick={() => navigate("/")}>
          Entrar
        </button>
      </div>

      <section className="SignUpInputContainer">
        <h1 className="TextTittleTop">
          Olá, boas vindas ao labEddit!
        </h1>

        <article>
          <form onSubmit={handleSignUp} autoComplete="off">
            <section>
              <input
                className="InputSignUp"
                name={"name"}
                value={form.name}
                onChange={(event) => changeForm(event, form, setForm)}
                placeholder={"Apelido"}
              />
            </section>
            <section>
              <input
                className="InputSignUp"
                name={"email"}
                value={form.email}
                onChange={(event) => changeForm(event, form, setForm)}
                placeholder={"Email"}
              />
            </section>

            <section className="LastInputContainer">
              <input
                className="InputSignUp"
                name={"password"}
                value={form.password}
                onChange={(event) => changeForm(event, form, setForm)}
                placeholder={"Senha"}
              />
            </section>

            <section>
              <label className="ContractText">Ao continuar, você concorda com o nosso <a href="#">Contrato de
                usuário</a> e nossa <a href="#">Política de Privacidade</a></label>
              <br />
              <div className="CheckBoxContainer">
                <input
                  className="InputCheckBox"
                  type="checkbox"
                  onChange={(event) => changeForm(event, form, setForm)}
                />
                <span className="CheckBoxText">
                  Eu concordo em receber emails sobre coisas legais no Labeddit
                </span>
              </div>
            </section>
            <button className="SignUp">Cadastrar</button>
          </form>
        </article>
      </section>
    </SignUpContainer>
  );
}
