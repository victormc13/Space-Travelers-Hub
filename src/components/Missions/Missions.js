import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, reserve } from "../../redux/missions/missionSlice";

const Missions = () => {
  const { missions, isLoading, error } = useSelector((state) => state.missions)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch])

  return (
    <div className="missions">
      {isLoading && <div>Loading...</div>}
      {error && <div>Sorry, something went wrong.</div>}
      {missions && (
        <table>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th>{' '}</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td>{mission.reserved ? 'Active Member' : 'NOT A MEMBER'}</td>
                <td>
                  <button type="button" onClick={()=> dispatch(reserve(mission.mission_id))}>
                    {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
};

export default Missions;
