define('sup-rentals/tests/helpers/start-app', ['exports', 'ember', 'sup-rentals/app', 'sup-rentals/config/environment'], function (exports, _ember, _supRentalsApp, _supRentalsConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _supRentalsConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _supRentalsApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});