import './Tile.css'

const Tile = ( {x, y, z, size } ) => {
    return (
      <div className="tile">
        <svg width={size} height={size} viewBox="0 0 100 100">
            <polygon points="50,10 90,35 90,75 50,100 10,75 10,35" fill="rgba(239, 239, 239, 0.8)" stroke="rgba(239, 239, 239, 1)" strokeWidth="3" />
        </svg>
      </div>
    );
  };
  
export default Tile;
  