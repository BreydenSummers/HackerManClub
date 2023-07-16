const canvas = document.getElementById("canvas1");
const contxt = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
//Note the single quotes
playerImage.src = './images/shadow_dog.png';
const spriteW = 575;
const spriteH = 523;
let frameX = 0;
let frameY = 4;
let gameFrame = 0;
const staggerFrames = 10;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    }

];
animationStates.forEach((state, index) => {
    let frames = {
        location: [], 

    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteW;
        let positionY = index * spriteH;
        frames.location.push({x:positionX, y:positionY});
    }
    spriteAnimations[state.name] = frames;
});

function animate(){
    //Built in fuction of canvas context give top left corner then bottom right
    contxt.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    let postition = Math.floor(gameFrame/staggerFrames) % spriteAnimations["idle"].location.length;
    frameX = spriteW * postition;
    //Image you want to draw, src x then src y coords, src width and src height. destin x and y and w and h
    contxt.drawImage(playerImage, frameX, frameY * spriteH, spriteW, spriteH, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();