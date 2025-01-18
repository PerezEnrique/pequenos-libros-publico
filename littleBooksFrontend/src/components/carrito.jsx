import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import cart from "../assets/cart.png";

import "../styles/carrito.css";

//este componente muestra la segunda vista del ecommerce contiene la lista
// de compra y un formulario con los datos requeridos para el envio

const Carrito  = () => {         

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        direccion: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formulario enviado", formData);
    };

    return(
        <div className="container">
            <div className="list">
                <img src={cart} alt="carrito de compras" className="img-carrito" />
                <h2>
                    Tu pedido:
                </h2>
                {/*espacio para la lista dinamica*/}
                <button type="button">
                    <Link to="/">
                        Seguir comprando
                    </Link>
                </button>
            </div>
            <div className="form-conteiner">
                <h2>
                    Informacion de entrega
                </h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre"> Nombre </label>
                    <input type="text" name="nombre" required value={formData.nombre} onChange={handleChange} />

                    <label htmlFor="apellido"> Apellido </label>
                    <input type="text" name="apellido" required value={formData.apellido} onChange={handleChange} />

                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} />

                    <label htmlFor="direccion"> Direccion </label>
                    <input type="text" name="direccion" required value={formData.direccion} onChange={handleChange} />

                    <button type="submit">Confirmar pedido</button>
                </form>
            </div>
        </div>

    );
}
export default Carrito;