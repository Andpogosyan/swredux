import React from 'react';
import propTypes from 'prop-types';

const Modal = ({ gender, style, hair, height, changeStatus, name, src }) => {
    return (
        <div className='modal'>
            <div className='modalImg'>
                <img src={src} alt='character_logo'/>
            </div>
            <div className='modalItems'>
                <div className='modalInfo'>
                    <p>Name: {name}</p>
                    <p>Hair color: {hair}</p>
                    <p>Height: {height}</p>
                    <p>Skin color: {style}</p>
                    <p>Gender: {gender}</p>
                </div>
                <div className='modalButton'>
                    <button onClick={changeStatus}>Close</button>
                </div>
            </div>

        </div>
    )
}
Modal.propTypes = {
    gender: propTypes.string.isRequired,
    style: propTypes.string.isRequired,
    hair: propTypes.string.isRequired,
    height: propTypes.string.isRequired,
    changeStatus: propTypes.func.isRequired,
    src: propTypes.string.isRequired
}

export default Modal;