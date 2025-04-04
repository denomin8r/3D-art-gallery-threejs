const roomWidth = 20;
const roomHeight = 20;
const roomDepth = 18;

export const roomDimensions = {
    "width": roomWidth,
    "depth": roomDepth,
    "height": roomHeight,
    "backWallZ" : Math.floor(roomDepth / 2),
    "frontWallZ" :-Math.floor(roomDepth / 2),
    "rightWallX" : Math.floor(roomWidth / 2),
    "leftWallX" : -Math.floor(roomWidth / 2),
}