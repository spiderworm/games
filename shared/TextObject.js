define(
  [
    './GameObject'
  ],
  function(
    GameObject
  ) {

    function TextObject(str) {
      GameObject.apply(this);
    }

    TextObject.prototype = new GameObject();

    return TextObject;

  }
);