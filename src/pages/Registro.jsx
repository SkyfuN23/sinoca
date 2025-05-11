import { Link } from "react-router-dom";

function Registro() {
  return (
    <form>
      <h1>Registro</h1>

      <input className="input" type="text" placeholder="Nombre de usuario" required />


      <div className="input-group">
        <input className="input input-codArea" type="tel" placeholder="Cod. Área" required />
        <input className="input input-celular" type="tel" placeholder="Celular" required />
        <button className="btn btn-validate" type="button">Validar</button>
      </div>
      <div className="btn-group">
        <Link to="/" className="btn">Regresar</Link>
        <button className="btn" type="submit">Ingresar</button>
      </div>
    </form>
  );
}

export default Registro;
