import React, { useState } from 'react';
import libros_cama from '../assets/libros_en_cama.jpeg';
import libreria from '../assets/bibloteca_tenue.jpeg';
import '../styles/home.css';

//este componente es el estatico de la pagina, el unico cambio es la variocion de una imagen al mapa de ubicacion.
const StatiContent = () => {
    return (
        <div className="content-container">
            <div className="content-block">
                <img src={libros_cama} alt="Imagen de libros sobre una cama" className="content-image" />
                <div className='context_text'>
                    <h2 >Tienda fisica</h2>
                    <h3 >1234 CONSTITUCION</h3>
                    <h3 >BUENOS AIRES, ARGENTINA</h3>
                    <button className='location_button'>
                        Encuentranos
                    </button>
                </div>
            </div>
            <div className="content-block reverse">
                <img src={libreria} alt="Imagen de libreria" className="content-image" />
                <div className='context_text'>
                    <h2>Contactanos:</h2>
                        <div className='box'>
                            <h5>Social media:</h5>
                            <h3>@PequeñosLibros</h3>
                        </div>
                        <div className='box'>
                            <h5>Email:</h5>
                            <h3>pequeñoslibros@ejemplo.com</h3>
                        </div>
                        <div className='box'>
                            <h5>Telefono</h5>
                            <h3>011-12345678</h3>
                        </div>
                </div>
            </div>
        </div>

    );
};
export default StatiContent;