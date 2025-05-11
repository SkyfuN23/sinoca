import { useState } from "react";
import { Link } from "react-router-dom";

function Carga() {
    const [estado, setEstado] = useState("idle"); // 'idle' | 'verificando' | 'exito' | 'error'

    const handleSubmit = (e) => {
        e.preventDefault(); // Previene recarga
        setEstado("verificando");

        // Simular verificación (por ejemplo, una llamada a backend)
        setTimeout(() => {
            const exito = Math.random() > 0.5; // Simula éxito o error aleatorio
            setEstado(exito ? "exito" : "error");
        }, 2000);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Carga</h1>

            <p>PASO 1:</p>
            <p>Realice una transferencia a la siguiente cuenta:</p>
            <p>Cuenta: Roberto Flores</p>
            <p>Alias: roberpay2</p>
            <p>PASO 2:</p>
            <p>Complete los siguientes datos:</p>

            <input
                className="input"
                type="number"
                placeholder="Importe transferido"
                required
            />
            <input
                className="input"
                type="text"
                placeholder="Nombre completo del titular de la cuenta"
                required
            />

            {/* Mensajes condicionales */}
            {estado === "verificando" && <p>Verificando...</p>}
            {estado === "exito" && <p style={{ color: "green" }}>Fichas cargadas correctamente</p>}
            {estado === "error" && <p style={{ color: "red" }}>Por favor revise los datos</p>}

            <div className="btn-group">
                <Link to="/panel" className="btn">Regresar</Link>
                <button className="btn" type="submit">Cargar</button>
            </div>
        </form>
    );
}

export default Carga;
