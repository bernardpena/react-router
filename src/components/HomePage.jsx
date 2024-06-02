import React from 'react'
import img1 from "../assets/img/pngegg.png";
import './Homepage.css';

function HomePage() {
    return (
        <>
            <div className="saludo">
                <h1>¡Bienvenido a Happy Cake!</h1>
                <span>El lugar de los Pasteles Felices</span>
                <img className='imagen1' src={img1} alt="cake" />
            </div>
        </>
    )
}

export default HomePage