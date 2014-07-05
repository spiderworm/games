define(
  function() {

    function GameView(element) {
      this._element = element;
    }

    Object.defineProperty(GameView.prototype,"element",{
      get: function() {
        return this._element;
      }
    });
    
    return GameView;
  }
);