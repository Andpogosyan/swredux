import React from 'react';
import propTypes from 'prop-types';
import Modal from './modal'


const Characters = ({ results, isFetching, status, changeStatus, whoClick }) => {
  
  let currentPerson = results[whoClick];
  
  if (isFetching) {
    return <div className='loading'>Loading...</div>
  } else {
    return <div className="people">
      {
        results.map((item, index) => {
          const { name } = item;
          const src = `/images/${name.split(' ').join('')}.jpg`;

          return <div key={index} className='character'>
            <div className='imgContainer'>
              <img src={src} alt='character' />
            </div>
            <div>
              <span>{name}</span>
              {!status && <p className='seeMore' id={index} onClick={changeStatus}>Click here to see more...</p>}
            </div>
            </div>
        })
      }
      {status && <Modal src={`./images/${currentPerson.name.split(' ').join('')}.jpg`}
       changeStatus={changeStatus} 
       name={currentPerson.name} 
       height={currentPerson.height} 
       gender={currentPerson.gender} 
       style={currentPerson.skin_color} 
       hair={currentPerson.hair_color} />}
    </div>
  }
}

Characters.propTypes = {
  isFetching: propTypes.bool.isRequired,
  status: propTypes.bool.isRequired,
  results: propTypes.array.isRequired,
  changeStatus: propTypes.func.isRequired,
  whoClick: propTypes.string.isRequired
}

export default Characters;