//these constants are to simplify things CSS wise.

// make used for making player animation 
export const ANIMATION_SPEED = 350;

// size of inventory ideally..
export const MAX_ITEMS = 8;

// size of grid
const TILE_HEIGHT = 15; // vertical
const TILE_WIDTH = 20; // horizontal
export const MAP_DIMENSIONS = [TILE_WIDTH, TILE_HEIGHT];

// size of sprites/tiles (so I dont have to set to 40px manually)
export const SPRITE_SIZE = 40;

// map size (testing) 600x800 (15*40, 20*40)
export const MAP_HEIGHT = SPRITE_SIZE * TILE_HEIGHT;
export const MAP_WIDTH = SPRITE_SIZE * TILE_WIDTH;

// setting size of game view, in pixels (dont want to fill the whole screen)
export const GAME_VIEW_SIZE = 350;
export const GAME_VIEW_SIZE_LG = 400;

// depending on char lvl. (AFTER MVP)
// export const HIGH_LV = 10;

//set number of tiles to pad, so character doesn't see edge** (or else they'll be outside of grid)
export const MAP_PADDING_DISTANCE = 5;
