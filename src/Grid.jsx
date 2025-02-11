import Tile from "./Tile";
import "./Grid.css";

const GRID_SIZE = 3;        // Map radius
const TILE_SIZE = 50;       // Tile size
const GAP_SIZE = 0.55;       // Gap size

const gridGenerator = ( size ) => {
    // Contains list of tile (cube) coordinates 
    const tiles = [];

    for (let x = -size; x <= size; x++) {
        for (let y = -size; y <= size; y++ ) {
            let z = -x - y;
            if (Math.abs(z) <= size) {
                tiles.push({ x, y, z });
            }
        }
    }

    return tiles;
}

const hexToPixel = (x, y) => {
    const px = TILE_SIZE * GAP_SIZE * (Math.sqrt(3) * x + (Math.sqrt(3) / 2) * y);
    const py = TILE_SIZE * GAP_SIZE * (1.5 * y);
    return { px, py };
};
  
const Grid = () => {
    const hexTiles = gridGenerator(GRID_SIZE);
  
    return (
      <div className="grid">
        {hexTiles.map(({ x, y, z }) => {
          const { px, py } = hexToPixel(x, y);
          return (
            <div key={`${x},${y},${z}`} className="hex-wrapper" style={{ transform: `translate(${px}px, ${py}px)` }}>
              <Tile x={x} y={y} z={z} size={TILE_SIZE} />
            </div>
          );
        })}
      </div>
    );
};
  
export default Grid;