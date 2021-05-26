var config = {
    type: Phaser.AUTO,
    width: 150,
    height:165,
    scene: {
      preload: preload,
      create: create,
      update: update,
    },
  };
  
  var game = new Phaser.Game(config);
  
  function preload() {
      this.load.atlas("numbers","assets/newNumbers.png","assets/newNumbers.json");  
  
   
  }
  
  function create() {
     this.number = this.add.sprite(70,90,"numbers");
     let frameNames = this.textures.get("numbers").getFrameNames();
    
  
       
     this.anims.create({
      key: 'loop',
      frames: [
          { key: 'numbers',frame:"tile000.png"},
          { key: 'numbers',frame:"tile001.png" },
          { key: 'numbers',frame:"tile002.png" },
          { key: 'numbers',frame:"tile003.png" },
          { key: 'numbers',frame:"tile004.png" },
          { key: 'numbers',frame:"tile005.png" },
          { key: 'numbers',frame:"tile006.png" },
          { key: 'numbers',frame:"tile007.png" },
          { key: 'numbers',frame:"tile008.png" },
          { key: 'numbers',frame:"tile009.png" },
       ],
      frameRate: 2,
      repeat: -1
       });
   
       this.number.play("loop");
    }


  

  
  
 
  
    
  
   
   
  
  
  
  function update() {}