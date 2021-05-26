var config = {
  type: Phaser.AUTO,
  width: 1400,
  height: 650,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("blankFace", "assets/blankFace.jpg");
  this.load.image("eyesNose","assets/noseGlasses.png");
  this.load.image("sexyLips","assets/sexyLips.png");
  this.load.image("mustacheMouth","assets/mouthMustache.png");
  this.load.image("eyes","assets/eyes2.png");
 
}

function create() {
  let face = this.add.image(400, 300, "blankFace");
  let eyesNose = this.add.image(900, 500, "eyesNose").setInteractive();
  let sexyLips = this.add.image(900, 100, "sexyLips").setInteractive();
  let mustacheMouth = this.add.image(900, 250, "mustacheMouth").setInteractive();
  let eyes = this.add.image(400, 350, "eyes").setInteractive();
  
  

  
  face.setScale(1.8);
  eyesNose.setScale(.4);
  sexyLips.setScale(.05);
  mustacheMouth.setScale(.2);
  eyes.setScale(.7);


  this.input.setDraggable(eyesNose);
  this.input.setDraggable(sexyLips);
  this.input.setDraggable(mustacheMouth);  
  this.input.setDraggable(eyes);

  this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

    gameObject.x = dragX;
    gameObject.y = dragY;

});

  this.input.on('dragend', function (pointer, gameObject) {

    gameObject.clearTint();

});

  

 
 
}


function update() {}
