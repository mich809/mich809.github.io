var config = {
    type: Phaser.AUTO,
    width: 1000,
    height:700,
    scene: {
      preload: preload,
      create: create,
      update: update,
    },
  };
  
  var game = new Phaser.Game(config);
  
  function preload() {
            this.load.atlas("humanDance","assets/humanDance/humanDance.png","assets/humanDance/humanDance.json"); 
            this.load.atlas("alienDance","assets/alienDance/alien.png","assets/alienDance/alien.json");  
            this.load.image('background', 'assets/discoBackground.jpg');
            this.load.image('bubble', 'assets/bubble.png');
  
   
  }
  
  function create() {
    this.add.image(500, 350, 'background');
    this.bubble = this.add.image(800, 350, 'bubble');


    this.human = this.add.sprite(250,490,"humanDance");
    let frameNames = this.textures.get("humanDance").getFrameNames();

    this.alien = this.add.sprite(650,490,"alienDance");
    let frameNames1 = this.textures.get("alienDance").getFrameNames();
    this.alien.setScale(2);
    this.bubble.setScale(.5);
   
    
    
  
       
     this.anims.create({
      key: 'dance',
      frames: [
          { key: 'humanDance',frame:"tile000.png"},
          { key: 'humanDance',frame:"tile001.png" },
          { key: 'humanDance',frame:"tile002.png" },
          { key: 'humanDance',frame:"tile003.png" },
          { key: 'humanDance',frame:"tile004.png" },
          { key: 'humanDance',frame:"tile005.png" },
          { key: 'humanDance',frame:"tile006.png" },
          { key: 'humanDance',frame:"tile007.png" },
          { key: 'humanDance',frame:"tile008.png" },
          { key: 'humanDance',frame:"tile009.png" },
       ],
      frameRate: 15,
      repeat: -1
       });

       this.anims.create({
        key: 'dance1',
        frames: [
            { key: 'alienDance',frame:"tile000.png"},
            { key: 'alienDance',frame:"tile001.png" },
            { key: 'alienDance',frame:"tile002.png" },
            { key: 'alienDance',frame:"tile003.png" },
            { key: 'alienDance',frame:"tile004.png" },
            { key: 'alienDance',frame:"tile005.png" },
            { key: 'alienDance',frame:"tile006.png" },
            { key: 'alienDance',frame:"tile007.png" },
            { key: 'alienDance',frame:"tile008.png" },
            { key: 'alienDance',frame:"tile009.png" },
            { key: 'alienDance',frame:"tile0010.png" },
            { key: 'alienDance',frame:"tile0011.png"},
            { key: 'alienDance',frame:"tile0012.png" },
            { key: 'alienDance',frame:"tile0013.png" },
            { key: 'alienDance',frame:"tile0014.png" },
            { key: 'alienDance',frame:"tile0015.png" },
            { key: 'alienDance',frame:"tile0016.png" },
            { key: 'alienDance',frame:"tile0017.png" },
            { key: 'alienDance',frame:"tile0018.png" },
            { key: 'alienDance',frame:"tile0019.png" },
            { key: 'alienDance',frame:"tile0020.png" },
            { key: 'alienDance',frame:"tile0021.png" },
            { key: 'alienDance',frame:"tile0022.png"},
            { key: 'alienDance',frame:"tile0023.png" },
            { key: 'alienDance',frame:"tile0024.png" },
            { key: 'alienDance',frame:"tile0025.png" },
            { key: 'alienDance',frame:"tile0026.png" },
            { key: 'alienDance',frame:"tile0027.png" },
            { key: 'alienDance',frame:"tile0028.png" },
            { key: 'alienDance',frame:"tile0029.png" },
            { key: 'alienDance',frame:"tile0030.png" },
            { key: 'alienDance',frame:"tile0031.png" },
            { key: 'alienDance',frame:"tile0032.png" },
            { key: 'alienDance',frame:"tile0033.png"},
            { key: 'alienDance',frame:"tile0034.png" },
            { key: 'alienDance',frame:"tile0035.png" },
            { key: 'alienDance',frame:"tile0036.png" },
            { key: 'alienDance',frame:"tile0037.png" },
            { key: 'alienDance',frame:"tile0038.png" },
            { key: 'alienDance',frame:"tile0039.png" },
            { key: 'alienDance',frame:"tile0040.png" },
            { key: 'alienDance',frame:"tile0041.png" },
            { key: 'alienDance',frame:"tile0042.png" },
            { key: 'alienDance',frame:"tile0043.png" },
         ],
        frameRate: 25,
        repeat: -1
         });
   
       this.human.play("dance");
       this.alien.play("dance1");
    }


  

  
  
 
  
    
  
   
   
  
  
  
  function update() {}