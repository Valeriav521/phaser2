/* global game phaser game_state */
 game_state.story = function() {};

 game_state.story.prototype = {

     preload: function() {
     

     },
     create: function() {
         game.stage.backgroundColor = '#ff0087'
         
     },

     update: function() {
      this.text = game.add.text(0,0, "Daisy Cheeks was a normal pony");
      this.text.font = ('arial');
      this.text.fontSize = 55;
      this.text.fill = "#ffffff";
      this.text0 = game.add.text(0,60, "His village is bieng under attack")
      this.text0.font = ('arial');
      this.text0.fontSize = 55;
      this.text0.fill = "#ffffff";
      this.text1 = game.add.text(0,60, "you need to help Daisy cheeks turn into a unicorn to fight off nightmare moon");
      this.text1.font = ('arial');
      this.text1.fontSize = 55;
      this.text1.fill = "#ffffff";
      this.text2 = game.add.text(0,0, "collect all of the cotton candy for a sweet surprise");
      this.text2.font = ('arial');
      this.text2.fontSize = 55;
      this.text2.fill = "#ffffff";
     }
    
 };

//game.state.add('story', game_state.story);
//  game.state.start('story');