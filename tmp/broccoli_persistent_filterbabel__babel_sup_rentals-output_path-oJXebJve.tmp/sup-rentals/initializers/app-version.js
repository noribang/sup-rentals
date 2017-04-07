define('sup-rentals/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'sup-rentals/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _supRentalsConfigEnvironment) {
  var _config$APP = _supRentalsConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});