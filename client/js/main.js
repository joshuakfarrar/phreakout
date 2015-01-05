define(['jquery'], function($) {
  var game;

  var initApp = function() {
    $(document).ready(function() {
      var main = {
        preload: function() {
          game.load.image('paddle', 'img/paddle.png');
          game.load.image('ball', 'img/ball.png');
          game.load.image('brick', 'img/brick.png');
        },

        create: function() {
          game.physics.startSystem(Phaser.Physics.ARCADE);

          this.cursor = game.input.keyboard.createCursorKeys();

          this.paddle = game.add.sprite(200, 400, 'paddle');
          game.physics.arcade.enable(this.paddle);

          this.paddle.body.immovable = true;
          this.paddle.body.collideWorldBounds = true;

          // Create a group that will contain all the bricks
          this.bricks = game.add.group();
          this.bricks.enableBody = true;

          // Create the 16 bricks
          for (var i = 0; i < 5; i++)
            for (var j = 0; j < 5; j++)
              game.add.sprite(55+i*60, 55+j*35, 'brick', 0, this.bricks);

          // Make sure that the bricks won't move
          this.bricks.setAll('body.immovable', true);

          // Create the ball with physics
          this.ball = game.add.sprite(200, 300, 'ball');
          game.physics.arcade.enable(this.ball);

          // Add velocity to the ball
          this.ball.body.velocity.x = 200; 
          this.ball.body.velocity.y = 200;

          // Make the ball bouncy 
          this.ball.body.collideWorldBounds = true;
          this.ball.body.bounce.x = 1; 
          this.ball.body.bounce.y = 1;
        },

        update: function() {
          if (this.cursor.right.isDown) {
            this.paddle.body.velocity.x = 350;
          } else if (this.cursor.left.isDown) {
            this.paddle.body.velocity.x = -350;
          } else {
            this.paddle.body.velocity.x = 0;
          }

          // Make the paddle and the ball collide
          game.physics.arcade.collide(this.paddle, this.ball);

          // Call the 'hit' function when the ball hit a brick
          game.physics.arcade.collide(this.ball, this.bricks, this.hit, null, this);
        },

        hit: function(ball, brick) {
          brick.kill();
        }
      }

      game = new Phaser.Game(400, 450, Phaser.AUTO, 'canvas');
      game.state.add('main', main);
      game.state.start('main');
    });
  }

  initApp();
});