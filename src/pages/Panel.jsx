import { Link } from "react-router-dom";

function Panel() {
  return (
    <form>
      <h1>Panel</h1>
      <div className="btn-group btn-group-panel">
        <Link to="/carga" className="btn">Cargar</Link>
        <Link to="/retiro" className="btn">Retirar</Link>
        <button type="button" className="btn">Cambiar Contraseña</button>
        <Link to="/" className="btn">Cerrar Sesion</Link>
      </div>
    </form>
  );
}

export default Panel;