import { Link } from "react-router-dom";

function Login() {
  return (
    <form>
      <h1>Casino</h1>

      <input className="input" type="text" placeholder="Usuario" required />

      <div className="btn-group">
        <Link to="/registro" className="btn">Registrarse</Link>
        <button className="btn" type="submit">Ingresar</button>
      </div>
      
    </form>
  );
}

export default Login;