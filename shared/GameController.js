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

          game.subscribeToObjects(function(gameObjects) {
            gameController.__loadViews(gameObjects);
          });

        });
      }
    }

    Object.defineProperty(GameController.prototype,"element",{
      get: function() {
        return this._element;
      }
    });

    GameController.prototype.__loadViews = function(gameObjects) {
      for(var i=0; i<gameObjects.length; i++) {
        gameController.__loadView(gameObjects[i]);
      }
    }

    GameController.prototype.__loadView = function(gameObject) {
      var gameController = this;
      require(
        [this._viewPath + gameObject.type],
        function(View) {
          gameController._view.add(new View(gameObject));
        }
      );
    }


    return GameController;

  }
);