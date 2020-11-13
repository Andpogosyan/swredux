import React from 'react';
import propTypes from 'prop-types';

const Modal = ({ gender, style, hair, height, changeStatus, name, src }) => {
    return (
        <div className='modal'>
            <div className='modalImg'>
                <img src={src} />
            </div>
            <div className='modalItems'>
                <div className='modalInfo'>
                    <p>Имя: {name}</p>
                    <p>Цвет волос: {hair}</p>
                    <p>Рост: {height}</p>
                    <p>Цвет одежды: {style}</p>
                    <p>Пол: {gender}</p>
                </div>
                <div className='modalButton'>
                    <button onClick={changeStatus}>close</button>
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