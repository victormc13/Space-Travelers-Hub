import React, { useEffect } from 'react';
import './Dragons.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons, reserve } from '../../redux/dragon/dragonsSlice';
import Dragon from './Dragon';

function Dragons() {
  const dispatch = useDispatch();
  const { dragons, status } = useSelector((state) => state.dragons);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDragons());
    }
  }, [status, dispatch]);

  return (
    <div className="dragons-container">
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: Something went wrong</div>}
      {status === 'succeeded'
        && dragons.map((dragon) => (
          <Dragon
            key={dragon.id}
            dragon={dragon}
            onReserve={(dragonId) => dispatch(reserve(dragonId))}
          />
        ))}
    </div>
  );
}

export default Dragons;
