import React from 'react';
import Slide from './Slide';

const Slideshow = ({ characters }) => {
    return (
        <div>
            {
                characters.map((character, i) => {
                    return <Slide key={i} name={characters[i].name} image={characters[i].image} isAlive={characters[i].status} species={characters[i].species} origin={characters[i].origin.name} location={characters[i].location.name}/>
                })
            }
        </div>
    );
}

export default Slideshow;