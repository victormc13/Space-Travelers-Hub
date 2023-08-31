import PropTypes from 'prop-types';

function Dragon({ dragon, onReserve }) {
  const badgeStyle = dragon.reserved
    ? { padding: '2px 10px' }
    : { padding: '0' };

  const buttonStyle = dragon.reserved
    ? { background: '#fff', color: '#000' }
    : { background: '#007bff', border: 'none' };

  return (
    <div className="dragon">
      <img src={dragon.flickr_images[0]} alt={dragon.name} className="dragon-img" />
      <div className="dragon-detail">
        <h2>{dragon.name}</h2>
        <p>
          <span style={badgeStyle} className="badge">
            {dragon.reserved ? 'Reserved' : ''}
          </span>
          {dragon.description}
        </p>
        <button
          style={buttonStyle}
          className="btn-reservation"
          type="button"
          onClick={() => onReserve(dragon.id)}
        >
          {dragon.reserved ? 'Cancel Reservation' : 'Reserve dragon'}
        </button>
      </div>
    </div>
  );
}

Dragon.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onReserve: PropTypes.func.isRequired,
};

export default Dragon;
