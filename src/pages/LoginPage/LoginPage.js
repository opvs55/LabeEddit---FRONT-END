import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { goToHomePage, goToSignupPage } from "../../routes/coordinator";

export default function LoginPage() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });


  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault()

    try {
      setIsLoading(true);

      const body = {
        email: form.email,
        password: form.password
      };

      const response = await axios.post(BASE_URL + "/users/login", body);
      const token = response.data.token;
      window.localStorage.setItem('token', token);


      setIsLoading(false);
      goToHomePage(navigate);
    } catch (error) {
      setIsLoading(false);
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
      window.alert("senha invalida!")
    }
  };

  return (
    <main>
      <section>
        <article>
          <form onSubmit={login} autoComplete="off">
            <section>
              <label>Email</label>
              <input
                name={"email"}
                value={form.email}
                onChange={changeForm}
              />
            </section>

            <section>
              <label>Senha</label>
              <input
                name={"password"}
                value={form.password}
                onChange={changeForm}
              />
            </section>
            <button disabled={isLoading}>Continuar</button>
          </form>
          <h2>
            <button disabled={isLoading} onClick={() => goToSignupPage(navigate)}>
              Crie uma conta
            </button>
          </h2>
        </article>
      </section>
    </main>
  );
}
