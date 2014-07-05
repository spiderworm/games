define(
  [
    './Scene'
  ],
  function(
    Scene
  ) {

    function Game() {
      Scene.apply(this);
    }

    Game.prototype = new Scene();
    
    return Game;

  }
);