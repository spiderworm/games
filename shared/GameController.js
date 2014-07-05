define(
  function() {

    function GameController(game,viewPath) {
      if(game && viewPath) {
        this._game = game;
        this._viewPath = viewPath;

        this._element = document.createElement('article');
        this._element.classList.add('game');

        var gameController = this;
        require([viewPath + "Game"], function(View) {
          gameController._view = new View();
          gameController.element.appendChild(gameController._view.element);
        });
      }
    }

    Object.defineProperty(GameController.prototype,"element",{
      get: function() {
        return this._element;
      }
    });


    return GameController;

  }
);