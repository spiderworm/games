define(
  [
    '../../shared/Game'
  ],
  function(
    BaseGame
  ) {

    function Game() {
      BaseGame.apply(this);
    }

    Game.prototype = new BaseGame();

    return Game;

  }
);