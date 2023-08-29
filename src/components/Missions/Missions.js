import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './Missions.modules.css';
import { getMissions, reserve } from '../../redux/missions/missionSlice';

const Missions = () => {
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div className="missions">
      {isLoading && <div>Loading...</div>}
      {error && <div>Sorry, something went wrong.</div>}
      {missions && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th color="black">Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th style={{ width: '150px' }}>
                {' '}
              </th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td className="badge-container">
                  <Badge
                    bg={mission.reserved ? 'info' : 'secondary'}
                  >
                    {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
                  </Badge>
                </td>
                <td className="button-container">
                  <Button
                    type="button"
                    variant={mission.reserved ? 'outline-danger' : 'outline-secondary'}
                    onClick={() => dispatch(reserve(mission.mission_id))}
                  >
                    {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Missions;
