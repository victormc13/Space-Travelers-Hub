import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { dragonAction } from '../../redux/dragons/dragons';

const DragonCard = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, src, type, value,
  } = props;

  const handler = (e) => {
    const { id } = e.target;
    dispatch(dragonAction.dragonReserve({ id }));
  };
  return (
    <div className="rocket-continer">
      <div className="img-continer">
        <img className="image" alt="dragon-img" src={src} />
      </div>
      <div className="text-continer">
        <h1 className="rocket-name">{name}</h1>
        <div className="paragraph-cont">
          <p className="rocket-des">
            {' '}
            <span style={{ display: value ? 'inline' : 'none' }} className="reserved-button">
              Reserved
            </span>
            {' '}
            {type}
          </p>
        </div>
        {!value && <button id={id} onClick={handler} className="card-button" type="button">Reserve Dragon</button> }
        {value && <button id={id} onClick={handler} className="cancel-button" type="button">Cancel Reservation</button>}
      </div>
    </div>
  );
};

export default DragonCard;

DragonCard.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  src: propTypes.string.isRequired,
  value: propTypes.bool.isRequired,
  id: propTypes.string.isRequired,
};
