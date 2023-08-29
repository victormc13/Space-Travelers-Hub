import React, { useEffect } from 'react';
import './Rockets.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserve } from '../../redux/rockets/rocketsSlice';
import Rocket from './Rocket';

function Rockets() {
  const dispatch = useDispatch();
  const { rockets, status } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'failed') {
    content = <div>Error: Something went wrong</div>;
  } else {
    content = (
      <div className="rockets-container">
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            rocket={rocket}
            onReserve={(rocketId) => dispatch(reserve(rocketId))}
          />
        ))}
      </div>
    );
  }

  return content;
}

export default Rockets;
