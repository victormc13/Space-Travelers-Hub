import './Profile.css';
import { useSelector } from 'react-redux';

function Profile() {
  const { rockets } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.missions);

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
            {rockets.filter((rocket) => rocket.reserved).map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
