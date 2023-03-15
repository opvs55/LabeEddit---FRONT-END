import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeForm } from "../../actions/changeForm/formUtils";
import { isValidEmail } from "../../actions/formBusiness/email";
import { isValidPassword } from "../../actions/formBusiness/password";
import { signup } from "../../actions/signup/signupAction";


export default function SignupPage() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

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
    } if (!isValidPassword(form.password)){
      alert("8 caracteres, uma letra minúscula e maiúscula, um número, um caractere especial")
    } else{
      signup(form, setIsLoading, navigate);
    }
  };


  return (
    <main>
      <h2>
        <button disabled={isLoading} onClick={() => navigate("/")}>
          Entrar
        </button>
      </h2>
      <section>
        <h1>
          Olá, boas vindas ao labEddit!
        </h1>

        <article>
          <form onSubmit={handleSignUp} autoComplete="off">
            <section>
              <input
                name={"name"}
                value={form.name}
                onChange={(event) => changeForm(event, form, setForm)}
                placeholder={"Apelido"}
              />
            </section>
            <section>
              <input
                name={"email"}
                value={form.email}
                onChange={(event) => changeForm(event, form, setForm)}
                placeholder={"Email"}
              />
            </section>

            <section>
              <input
                name={"password"}
                value={form.password}
                onChange={(event) => changeForm(event, form, setForm)}
                placeholder={"Senha"}
              />
            </section>

            <section>
              <label>Ao continuar, você concorda com o nosso Contrato de
                usuário e nossa Política de Privacidade</label>
              <br />
              <span>
                <input
                  type="checkbox"
                  onChange={(event) => changeForm(event, form, setForm)}
                />
                Eu concordo em receber emails sobre coisas legais no Labeddit
              </span>
            </section>

            <button disabled={isLoading}>Cadastrar</button>
          </form>
        </article>
      </section>
    </main>
  );
}
