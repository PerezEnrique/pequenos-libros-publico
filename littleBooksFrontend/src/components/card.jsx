import React from 'react';

//base de la card, donde se mostraran los distintos libros
const Card = ({ image, title, author, stock, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-author">Autor: {author}</p>
        <p className="card-stock">Stock: {stock}</p>
        <p className="card-description">{description}</p>
        <button className="card-button">Agregar</button>
      </div>
    </div>
  );
};

export default Card;
