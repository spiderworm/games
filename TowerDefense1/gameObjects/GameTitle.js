define(
  [
    '../../shared/TextObject'
  ],
  function(
    TextObject
  ) {

    function GameTitle() {
      TextObject.apply(this,["Tower Defense 1"]);
    }

    GameTitle.prototype = new TextObject();

    return GameTitle;

  }
);