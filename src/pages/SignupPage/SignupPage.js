import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { goToHomePage, goToLoginPage } from "../../routes/coordinator";

export default function SignupPage() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });


  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const signup = async (event) => {
    event.preventDefault()

    try {
      setIsLoading(true);

      const body = {
        name: form.name,
        email: form.email,
        password: form.password
      };

      const response = await axios.post(BASE_URL + "/users/signup", body);
      const token = response.data.token;
      window.localStorage.setItem('token', token);

      setIsLoading(false);
      goToHomePage(navigate);
    } catch (error) {
      setIsLoading(false);
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };

  return (
    <main>
      <h2>
        <button disabled={isLoading} onClick={() => goToLoginPage(navigate)}>
          Entrar
        </button>
      </h2>
      <section>
        <h1>
          Olá, boas vindas ao labEddit!
        </h1>

        <article>
          <form onSubmit={signup} autoComplete="off">
            <section>
              <input
                name={"name"}
                value={form.name}
                onChange={changeForm}
                placeholder={"Apelido"}
              />
            </section>
            <section>
              <input
                name={"email"}
                value={form.email}
                onChange={changeForm}
                placeholder={"Email"}
              />
            </section>

            <section>
              <input
                name={"password"}
                value={form.password}
                onChange={changeForm}
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
                  onChange={changeForm}
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
