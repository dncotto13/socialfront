import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <section>
      ¿Qué hay de nuevo <Link to={`/user/${user.id}`}>{user.email}?</Link>{" "} <button onClick={() => logout()}>Cerrar sesión</button>
    </section>
  ) : (
    <ul>
        <li>
          <Link to="/register">¿No tienes una cuenta? Regístrate</Link>
          </li>
        <li>
          <Link to="/login">Iniciar sesión</Link>
        </li>
    </ul>
  );
};