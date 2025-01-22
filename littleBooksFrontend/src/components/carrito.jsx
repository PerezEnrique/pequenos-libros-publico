import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cartImg from "../assets/cart.png";

import "../styles/carrito.css";

const Carrito = () => {         
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

  // Estado del carrito
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Obtener el carrito desde localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []); 

  return (
    <div className="container">
      <div className="list">
        <img src={cartImg} alt="carrito de compras" className="img-carrito" />
        <h2>Tu pedido:</h2>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            cart.map((item, index) => (
                <div key={index} className="list-item-cart">
                    <h4>{item.title}</h4>
                    <button className="btn" type="button" >-</button>
                        <h5 className="cantidad"> 1 </h5>
                    <button className="btn" type="button">+</button>            
                </div>
            ))
          )}
        </div>
        <button type="button">
          <Link to="/">Seguir comprando</Link>
        </button>
      </div>
      <div className="form-conteiner">
        <h2>Informacion de entrega</h2>
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
};

export default Carrito;
