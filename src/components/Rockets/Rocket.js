import PropTypes from 'prop-types';

function Rocket({ rocket, onReserve }) {
  const badgeStyle = rocket.reserved
    ? { padding: '2px 10px' }
    : { padding: '0' };

  const buttonStyle = rocket.reserved
    ? { background: '#fff', color: '#000' }
    : { background: '#007bff', border: 'none' };

  return (
    <div className="rocket">
      <img src={rocket.flickr_images[0]} alt={rocket.name} className="rocket-img" />
      <div className="rocket-detail">
        <h2>{rocket.name}</h2>
        <p>
          <span style={badgeStyle} className="badge">
            {rocket.reserved ? 'Reserved' : ''}
          </span>
          {rocket.description}
        </p>
        <button
          style={buttonStyle}
          className="btn-reservation"
          type="button"
          onClick={() => onReserve(rocket.id)}
        >
          {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onReserve: PropTypes.func.isRequired,
};

export default Rocket;
