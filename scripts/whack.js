var game = new Phaser.Game(1200, 600, Phaser.AUTO, "phaser-example", { preload: preload, create: create, render: render, update: update });

function preload() {
    game.load.image("phaser", "assets/sprites/troll.png");
}

var sprite = [];
var trollHole = [];

var upKey;
var downKey;
var leftKey;
var rightKey;

function create() {
  game.stage.backgroundColor = "#736357";
  
  upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
  aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
  sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
  dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
  
  trollHole[0] = new Phaser.Rectangle(300, 100, 100, 100);
  trollHole[1] = new Phaser.Rectangle(150, 250, 100, 100);
  trollHole[2] = new Phaser.Rectangle(300, 400, 100, 100);
  trollHole[3] = new Phaser.Rectangle(450, 250, 100, 100);

  trollHole[4] = new Phaser.Rectangle(800, 100, 100, 100);
  trollHole[5] = new Phaser.Rectangle(650, 250, 100, 100);
  trollHole[6] = new Phaser.Rectangle(800, 400, 100, 100);
  trollHole[7] = new Phaser.Rectangle(950, 250, 100, 100);

  for (var i = 0; i < 8; i++){
    sprite[i] = game.add.sprite(64, 64, "phaser");
    sprite[i].inputEnabled = true;
  }
}

function render(){

  for (var i = 0; i < 8; i++){
    sprite[i].alignIn(trollHole[i], Phaser.CENTER);
    game.debug.geom(trollHole[i], "rgba(255,255,255,0.0)"); 
  }
  
  if (upKey.isDown){
    game.debug.geom(trollHole[0], "rgba(255,255,255,0.1)");
    sprite[0].destroy();
  } else if (downKey.isDown){
    game.debug.geom(trollHole[2], "rgba(255,255,255,0.1)");
    sprite[2].destroy();
  }

  if (leftKey.isDown){
    game.debug.geom(trollHole[1], "rgba(255,255,255,0.1)");
    sprite[1].destroy();
  } else if (rightKey.isDown){
    game.debug.geom(trollHole[3], "rgba(255,255,255,0.1)");
    sprite[3].destroy();
  }

  if (wKey.isDown){
    game.debug.geom(trollHole[4], "rgba(255,255,255,0.1)");
    sprite[4].destroy();
  } else if (sKey.isDown){
    game.debug.geom(trollHole[6], "rgba(255,255,255,0.1)");
    sprite[6].destroy();
  }

  if (aKey.isDown){
    game.debug.geom(trollHole[5], "rgba(255,255,255,0.1)");
    sprite[5].destroy();
  } else if (dKey.isDown){
    game.debug.geom(trollHole[7], "rgba(255,255,255,0.1)");
    sprite[7].destroy();
  }
}

function update() {
}
