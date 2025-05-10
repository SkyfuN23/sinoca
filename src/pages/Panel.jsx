import { Link } from "react-router-dom";

function Panel() {
  return (
    <form className="panel">
      <h1>Panel</h1>
      <div className="btn-group btn-group-panel">
        <button type="button" className="btn">Cargar</button>
        <button type="button" className="btn">Retirar</button>
        <button type="button" className="btn">Cambiar Contraseña</button>
        <Link to="/" className="btn">Cerrar Sesion</Link>
      </div>
    </form>
  );
}

export default Panel;