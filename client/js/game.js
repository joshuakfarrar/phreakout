define(function() {
  var Game = Class.extend({
    init: function() {
      this.game = new Phaser.Game(400, 450, Phaser.AUTO, 'canvas');
      this.start();
    },

    start: function() {
      this.game.state.add('main', this);
      this.game.state.start('main');
    },

    preload: function() {

    },

    create: function() {

    },

    update: function() {

    }
    // init: function(app) {
    //   this.app = app;
    //   this.ready = false;
    //   this.started = false;
    //   this.hasNeverStarted = true;
    // }

    // setup: function(canvas, background, foreground) {
    //   this.setRenderer(new Renderer(this, canvas, background, foreground));
    // },

    // setRenderer: function(renderer) {
    //   this.renderer = renderer;
    // },

    // setUpdater: function(updater) {
    //   this.updater = updater;
    // },

    // run: function() {
    //   this.setUpdater(new Updater(this));

    //   if (this.hasNeverStarted) {
    //     this.started = true;
    //     this.start();
    //   }
    // },

    // tick: function() {
    //   console.log("tick");
    //   this.currentTime = new Date().getTime();

    //   if (this.started) {
    //     this.updater.update();
    //     this.renderer.renderFrame();
    //   }

    //   if(!this.isStopped) {
    //     requestAnimFrame(this.tick.bind(this));
    //   }
    // },

    // start: function() {
    //   this.tick();
    //   this.hasNeverStarted = false;
    // },

    // stop: function() {
    //   this.isStopped = true;
    // }
  });

  return Game;
});