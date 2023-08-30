import { useEffect } from 'react';
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';

function Profile() {
  const dispatch = useDispatch();
  const { rockets, status } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.missions);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  return (
    <div className="profile-section">
      <div className="missions-section">
        <h2>My Missions</h2>
        <table>
          <tbody>
            {missions.filter((mission) => mission.reserved).map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rockets-section">
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
      </div>
    </div>
  );
}

export default Profile;
