import { Link } from "react-router-dom";

function Retiro() {
    return (
        <form>
            <h1>Retiro</h1>
                        <input className="input" type="number" placeholder="Importe" required />

            <div className="input-group">
                <input className="input input-codArea" type="tel" placeholder="Cod. Área" required />
                <input className="input input-celular" type="tel" placeholder="Celular" required />
                <button className="btn btn-validate" type="button">Validar</button>
            </div>
                        <div className="btn-group">
                <Link to="/panel" className="btn">Regresar</Link>
                <button className="btn" type="submit">Retirar</button>
            </div>
        </form>
    )
}

export default Retiro;