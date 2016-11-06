//Create the renderer
var SCREEN_WIDTH = 800;
var SCREEN_HEIGHT = 600;
var renderer = PIXI.autoDetectRenderer(SCREEN_WIDTH, SCREEN_HEIGHT);
var loader = PIXI.loader;
var resources = PIXI.loader.resources;
var Sprite = PIXI.Sprite;
//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();
var ship;
//Tell the `renderer` to `render` the `stage`
renderer.render(stage);

//state
loader
  .add('images/ship4.gif')
  .load(setup);
var state


function setup(){
//create sprite stuff
ship = new Sprite(resources['images/ship4.gif'].texture);
stage.addChild(ship);
renderer.render(stage);
}
