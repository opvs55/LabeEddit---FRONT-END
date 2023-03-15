import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/login/loginAction";
import { goToSignupPage } from "../../routes/coordinator";
import { changeForm } from "../../actions/changeForm/formUtils";

export default function LoginPage() {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    login(form, setIsLoading, navigate);
  };

  return (
    <main>
      <section>
        <article>
          <form onSubmit={handleLogin} autoComplete="off">
            <section>
              <label>Email</label>
              <input
                name={"email"}
                value={form.email}
                onChange={(event) => changeForm(event, form, setForm)}
              />
            </section>

            <section>
              <label>Senha</label>
              <input
                name={"password"}
                value={form.password}
                onChange={(event) => changeForm(event, form, setForm)}
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
