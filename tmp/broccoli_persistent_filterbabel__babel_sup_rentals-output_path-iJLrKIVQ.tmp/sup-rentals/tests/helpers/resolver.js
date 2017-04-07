define('sup-rentals/tests/helpers/resolver', ['exports', 'sup-rentals/resolver', 'sup-rentals/config/environment'], function (exports, _supRentalsResolver, _supRentalsConfigEnvironment) {

  var resolver = _supRentalsResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _supRentalsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _supRentalsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});