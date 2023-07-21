const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const spriteWidth = 575;
const spriteHeight = 523;
const playerImage = new Image();
let gameFrame = 0;
playerImage.src = 'images/shadow_dog.png';
const staggerFrames = 12;

let playerState = 'fall';


const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j< state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y:positionY})
    }
    spriteAnimations[state.name] = frames;
});

console.log(spriteAnimations);

function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
  
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
 
    let framex = spriteWidth * position;
    let framey = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, framex, framey, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
   
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();