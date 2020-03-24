// size of grid
const TILE_HEIGHT = 15; // vertical
const TILE_WIDTH = 20; // horizontal
export const MAP_DIMENSIONS = [TILE_WIDTH, TILE_HEIGHT];

// size of sprites/tiles (so I dont have to set to 40px manually)
export const SPRITE_SIZE = 40;

// size of inventory ideally..
export const MAX_ITEMS = 8;

// make used for making animation 
export const ANIMATION_SPEED = 350;

// map size (testing) 600x800 (15*40, 20*40)
export const MAP_HEIGHT = SPRITE_SIZE * TILE_HEIGHT;
export const MAP_WIDTH = SPRITE_SIZE * TILE_WIDTH;

// depending on char lvl. (AFTER MVP)
// export const HIGH_LV = 10;