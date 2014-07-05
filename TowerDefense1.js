define(
  [
    './shared/GameController',
    './TowerDefense1/gameObjects/Game'
  ],
  function(
    GameController,
    Game
  ) {

    function TowerDefense1() {
      var game = new Game();
      GameController.apply(
        this,
        [
          game,
          "TowerDefense1/views/simple/"
        ]
      );
      this.element.classList.add('towerDefense1');
    }

    TowerDefense1.prototype = new GameController();

    return TowerDefense1;

  }
);