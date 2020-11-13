import React from 'react';
import propTypes from 'prop-types';

const Buttons = ({ getChar, data }) => {

    if (!data.results) {
        return (
            <div className='startPage'>
                <p className='wellcomeMessage'>Привет, что бы увидеть персонажей из Star Wars, просто кликни на кнопку ниже.</p>
                <button className='startButton' onClick={() => getChar('http://swapi.dev/api/people/?page=1')}>Показать!</button>
            </div>
)
    } else {
        return (
            <div className='navButtons'>
                <button onClick={() => getChar(data.previous)}>Previous</button>
                <button onClick={() => getChar(data.next)}>Next</button>
            </div>
        )
    }

}


Buttons.propTypes = {
    getChar: propTypes.func.isRequired,
    data: propTypes.object.isRequired
}

export default Buttons;