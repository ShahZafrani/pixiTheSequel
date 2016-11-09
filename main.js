//Create the renderer
var SCREEN_WIDTH = 800;
var SCREEN_HEIGHT = 600;
var renderer = PIXI.autoDetectRenderer(SCREEN_WIDTH, SCREEN_HEIGHT);
var loader = PIXI.loader;
var resources = PIXI.loader.resources;
var Sprite = PIXI.Sprite;
//Add the canvas to the HTML document
document.body.appendChild(renderer.view);
//Capture the keyboard arrow keys
var left = keyboard(37),
    up = keyboard(38),
    right = keyboard(39),
    down = keyboard(40);

//Create a container object called the `stage` 'fleet' and define the ships
var stage = new PIXI.Container();
var fleet = new PIXI.particles.ParticleContainer();
var ship, alien;
//Tell the `renderer` to `render` the `stage`
renderer.render(stage);

//state
loader
  .add('images/spritesheet.json')
  .load(setup);
var state, id, player, enemy;


function setup(){
//create sprite stuff
id = PIXI.loader.resources['images/spritesheet.json'].textures;
ship = new Sprite(id['ship4.gif']);
alien = new Sprite(id['alien3.png']);
alien.position.set(150,150);
enemy = new Sprite(id['smallfighter0005.png']);
enemy.position.set(400,400);
//add sprites to respective containers
fleet.addChild(ship);
fleet.addChild(alien);
stage.addChild(fleet);
stage.addChild(enemy);
renderer.render(stage);
//set velocity values, state, call the gameLoop.
//player represents the current sprite or set of sprites we're moving.
player = fleet;
player.vx = 0;
player.vy = 0;
state = play;
gameLoop();

//Create Keyboard Controls

//Left arrow key `press` method
left.press = function() {

  //Change the ship's velocity when the key is pressed
  player.vx = -5;
  player.vy = 0;
};
//Left arrow key `release` method
left.release = function() {

  //If the left arrow has been released, and the right arrow isn't down,
  //and the ship isn't moving vertically:
  //Stop the ship
  if (!right.isDown && player.vy === 0) {
    player.vx = 0;
  }
};

//Right arrow key 'press' method
right.press = function() {

  //Change the ship's velocity when the key is pressed
  player.vx = 5;
  player.vy = 0;
};
//Right arrow key `release` method
right.release = function() {

  //If the left arrow has been released, and the right arrow isn't down,
  //and the ship isn't moving vertically:
  //Stop the ship
  if (!left.isDown && player.vy === 0) {
    player.vx = 0;
  }
};

//up arrow key 'press' method
up.press = function() {

  //Change the ship's velocity when the key is pressed
  player.vx = 0;
  player.vy = -5;
};

//up arrow key `release` method
up.release = function() {

  //If the left arrow has been released, and the right arrow isn't down,
  //and the ship isn't moving vertically:
  //Stop the ship
  if (!down.isDown && player.vx === 0) {
    player.vy = 0;
  }
};

//down arrow key 'press' method
down.press = function() {

  //Change the ship's velocity when the key is pressed
  player.vx = 0;
  player.vy = 5;
};
//down arrow key `release` method
down.release = function() {

  //If the left arrow has been released, and the right arrow isn't down,
  //and the ship isn't moving vertically:
  //Stop the ship
  if (!up.isDown && player.vx === 0) {
    player.vy = 0;
  }
};
}

console.log(setup);
function gameLoop(){
  requestAnimationFrame(gameLoop);

  state();

  renderer.render(stage);
}
function play(){
  //Capture the keyboard arrow keys
  if (hitTestRectangle(fleet, enemy)){
  //message.text = "hit!";
  alert("Hit box works!");
  }
  else{
  //message.text = "No collision...";
  }
  
  updateShip();
}
function updateShip(){
  updateShipPosition();
}
function updateShipPosition(){
  player.x += player.vx;
  player.y += player.vy;
}
//dummy line for testing
