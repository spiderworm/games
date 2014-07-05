define(
  [
    './GameObject'
  ],
  function(
    GameObject
  ) {

    function Scene() {
      GameObject.apply(this);
    }

    Scene.prototype = new GameObject();
    
    return Scene;

  }
);