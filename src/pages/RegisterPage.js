import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserService } from "../services";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    if (pass1 !== pass2) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      await registerUserService({ email, password: pass1 });
      //Nos lleva a la página de login
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="registit">
      <h1>¡Regístrate!</h1>
      <form className="register" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)}/>
        </fieldset>

        <fieldset>
          <label htmlFor="pass1">Contraseña</label>
          <input type="password" id="pass1" name="pass1" required onChange={(e) => setPass1(e.target.value)}/>
        </fieldset>

        <fieldset>
          <label htmlFor="pass2">Repetir contraseña</label>
          <input type="password" id="pass2" name="pass2" required onChange={(e) => setPass2(e.target.value)}/>
        </fieldset>

        <button>Regístrate</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
