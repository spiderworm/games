define(
  function() {

    function GameObject() {
      this._children = [];
    }

    GameObject.prototype.add = function(gameObject) {
      this._children.push(gameObject);
    }

    return GameObject;

  }
);