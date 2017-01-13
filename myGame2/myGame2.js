/*global Phaser*/

var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
var game_state = {};

game_state.main = function() {};
game_state.main.prototype = {

    preload: function() {
        game.load.image('sky', 'assets/sky.png');
        game.load.spritesheet('pony', 'assets/pony.png', 146, 146);
        game.load.image('object', 'assets/cottoncandy.png');
        game.load.spritesheet('unicorn', 'assets/unicorn.png', 146, 146);

    },

    create: function() {
        this.score = 0;
        game.add.sprite(0, 0, 'sky');
        //set the background color to blue
        //game.stage.backgroundColor = '#3598db';
        // start the arcade physics syste (formovements and collisions)
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //add the pony at the bottom of the screen
        this.pony = game.add.sprite(200, 400, 'pony');

        //we nee to enable physics on the "This.pony"
        game.physics.arcade.enable(this.pony);

        // this is to enable body on that pony 
        this.pony.enableBody = true;

        // this will make sure that the pony when it hits the ball 
        this.pony.body.immovable = true;

        // to create the right and left keys 
        this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

        //create objects group
        this.objects = game.add.group();

        //enable for all of the falling objects in the group
        this.objects.enableBody = true;

        //anchor this object to _this variable
        var _this = this;

        //create object over time
        setInterval(function() {
            //create an object at the top of the screen at a randpm x 
            var object = _this.objects.create(Math.random() * 750, -64, 'object');

            // Let gravity do it's thing
            object.body.gravity.y = 300;
        }, 1000);
        this.scoreText = game.add.text(16, 16, 'Score: 0', {
            fontSize: '32px',
            fill: '#ad07af'
        });
    },
    update: function() {


        //move the pony left/right when an arrow key is pressed
        if (this.left.isDown) {
            this.pony.frame = 1;
            this.pony.body.velocity.x = -430;
        }
        else if (this.right.isDown) {
            this.pony.frame = 0;
            this.pony.body.velocity.x = 430;
        }
        //stopthe pony when no keys are pressed 
        else {
            this.pony.body.velocity.x = 0;
        }

        var _this = this;
        this.objects.forEach(function(item) {
            if (item.body.y > 600) {
                item.body.y = -100;
                item.body.gravity.y = 0;
                item.body.velocity.y = -600;
                _this.score = 0;
                _this.scoreText.text = "Score: " + _this.score;
                //  _this.score = 0;
                _this.pony.kill();

                //add the pony at the bottom of the screen
                _this.pony = game.add.sprite(_this.pony.body.x, _this.pony.body.y, 'pony');

                //we nee to enable physics on the "This.pony"uhy .,n b
                game.physics.arcade.enable(_this.pony);

                //this is to enable body on that pony 
                _this.pony.enableBody = true;

                // this will make sure that the pony when it hits the ball 
                _this.pony.body.immovable = true;

            }
        })

        //colliosion between the pony and the object 
        this.game.physics.arcade.overlap(this.pony, this.objects, this.hitObject, null, this);


        this.game.physics.arcade.collide(this.pony, this.platforms);
        this.game.physics.arcade.overlap(this.pony, this.object, this.object, null, this);

    },
    hitObject: function(pony, object) {
        // this.scoreText.text = object.body.y;
        object.kill();

        this.score++;
        this.scoreText.text = 'Score: ' + this.score;

        if (this.score === 1) {
            this.pony.kill();

            //add the pony at the bottom of the screen
            this.pony = game.add.sprite(this.pony.body.x, this.pony.body.y, 'unicorn');

            //we nee to enable physics on the "This.pony"
            game.physics.arcade.enable(this.pony);

            // this is to enable body on that pony 
            this.pony.enableBody = true;

            // this will make sure that the pony when it hits the ball 
            this.pony.body.immovable = true;
        }

    }

};

game.state.add('main', game_state.main);
