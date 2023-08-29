import React, { useEffect } from 'react';
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';

function Profile() {
  const dispatch = useDispatch();
  const { rockets, status } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  return (
    <>
      <h2>My Rockets</h2>
      <table>
        <tbody>
          {rockets.map((rocket) => (
            rocket.reserved && (
            <tr key={rocket.id}>
              <td>{rocket.name}</td>
            </tr>
            )
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Profile;
