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

  return (
    <div className="rockets-container">
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: Something went wrong</div>}
      {status === 'succeeded'
        && rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            rocket={rocket}
            onReserve={(rocketId) => dispatch(reserve(rocketId))}
          />
        ))}
    </div>
  );
}

export default Rockets;
