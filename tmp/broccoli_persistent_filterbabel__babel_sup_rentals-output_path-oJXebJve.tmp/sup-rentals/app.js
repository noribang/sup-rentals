define('sup-rentals/app', ['exports', 'ember', 'sup-rentals/resolver', 'ember-load-initializers', 'sup-rentals/config/environment'], function (exports, _ember, _supRentalsResolver, _emberLoadInitializers, _supRentalsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _supRentalsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _supRentalsConfigEnvironment['default'].podModulePrefix,
    Resolver: _supRentalsResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _supRentalsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});