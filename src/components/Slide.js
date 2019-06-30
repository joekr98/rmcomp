import React from 'react';

const Slide = ({ name, image, isAlive, species, origin, location }) => {
    return (
        <div className="ba dib b--blue br3 pa2 bg-yellow ma3 bw1 shadow-3 tc bg-animate hover-bg-light-green slide">
            <img src={image} alt={name} className="img-slide"></img>
            <h1 className="f4">{name}</h1>
            <p>Status: {isAlive}</p>
            <p>Species: {species}</p>
            <p>Origin: {origin}</p>
            <p>Location: {location}</p>
        </div>
    )
    
    
}

export default Slide;