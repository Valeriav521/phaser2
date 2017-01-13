 /* global game Phaser game_state */
 game_state.story = function() {};

 game_state.story.prototype = {

  preload: function() {
   game.load.image('unicornpoop', 'assets/unicornpoop.png');

  },
  create: function() {
   game.stage.backgroundColor = '#ff0087';
   this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);

  },

  update: function() {
   if (this.space.isDown) {
     this.spawn();
    }
    this.text = game.add.text(0, 0, "CONGRATZ,");
   this.text.font = ('arial');
    this.text.fontSize = 70;
    this.text.fill = "#ffffff";
    this.text1 = game.add.text(0, 60, "you saved ponyland!");
    this.text1.font = ('arial');
    this.text1.fontSize = 60;
    this.text1.fill = "#ffffff";
   

  },
};
 game.state.add('story', game_state.story);
 game.state.start('story');
 