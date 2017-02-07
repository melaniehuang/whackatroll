var game = new Phaser.Game(1200, 600, Phaser.AUTO, "phaser-example", { preload: preload, create: create, render: render, update: update });

function preload() {
    game.load.image("phaser", "assets/sprites/troll.png");
}

var sprite;
var trollHole = [];

var upKey;
var downKey;
var leftKey;
var rightKey;

function create() {
  game.stage.backgroundColor = "#736357";
  sprite = game.add.sprite(64, 64, "phaser");
  sprite1 = game.add.sprite(64, 64, "phaser");
  sprite2 = game.add.sprite(64, 64, "phaser");
  sprite3 = game.add.sprite(64, 64, "phaser");

  sprite.inputEnabled = true;
  sprite.events.onInputDown.add(destroySprite, this);
  
  upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
  aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
  sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
  dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
  
  trollHole[0] = new Phaser.Rectangle(300, 100, 44, 44);
  trollHole[1] = new Phaser.Rectangle(150, 250, 44, 44);
  trollHole[2] = new Phaser.Rectangle(300, 400, 44, 44);
  trollHole[3] = new Phaser.Rectangle(450, 250, 44, 44);

  trollHole[4] = new Phaser.Rectangle(800, 100, 44, 44);
  trollHole[5] = new Phaser.Rectangle(650, 250, 44, 44);
  trollHole[6] = new Phaser.Rectangle(800, 400, 44, 44);
  trollHole[7] = new Phaser.Rectangle(950, 250, 44, 44);
}

function render(){
  sprite.alignIn(trollHole[0], Phaser.CENTER);
  sprite1.alignIn(trollHole[1], Phaser.CENTER);
  sprite2.alignIn(trollHole[2], Phaser.CENTER);
  sprite3.alignIn(trollHole[3], Phaser.CENTER);

  for (var i = 0; i < 8; i++){
    game.debug.geom(trollHole[i], "#000"); 
  }
  
  if (upKey.isDown){
    game.debug.geom(trollHole[0], "#fff");
    sprite.destroy();
  } else if (downKey.isDown){
    game.debug.geom(trollHole[2], "#fff");
    sprite2.destroy();
  }

  if (leftKey.isDown){
    game.debug.geom(trollHole[1], "#fff");
    sprite1.destroy();
  } else if (rightKey.isDown){
    game.debug.geom(trollHole[3], "#fff");
    sprite3.destroy();
  }

  if (wKey.isDown){
    game.debug.geom(trollHole[4], "#fff");
  } else if (sKey.isDown){
    game.debug.geom(trollHole[6], "#fff");
  }

  if (aKey.isDown){
    game.debug.geom(trollHole[5], "#fff");
  } else if (dKey.isDown){
    game.debug.geom(trollHole[7], "#fff");
  }
}

function update() {
}

function destroySprite (sprite) {
  sprite.destroy();
}
