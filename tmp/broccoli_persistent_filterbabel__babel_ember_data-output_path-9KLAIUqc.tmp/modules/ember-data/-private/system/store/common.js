export { _bind };
export { _guard };
export { _objectIsAlive };
import Ember from 'ember';

var get = Ember.get;

function _bind(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return function () {
    return fn.apply(undefined, args);
  };
}

function _guard(promise, test) {
  var guarded = promise['finally'](function () {
    if (!test()) {
      guarded._subscribers.length = 0;
    }
  });

  return guarded;
}

function _objectIsAlive(object) {
  return !(get(object, "isDestroyed") || get(object, "isDestroying"));
}