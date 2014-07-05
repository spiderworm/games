define(
  [
    '../../shared/Scene',
    '../gameObjects/GameTitle'
  ],
  function(
    Scene,
    GameTitle
  ) {

    function Opening() {
      Scene.apply(this);

      this.add(new GameTitle());
    }

    Opening.prototype = new Scene();

    return Opening;

  }
);