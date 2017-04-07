define('sup-rentals/router', ['exports', 'ember', 'sup-rentals/config/environment'], function (exports, _ember, _supRentalsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _supRentalsConfigEnvironment['default'].locationType,
    rootURL: _supRentalsConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('contact');
  });

  exports['default'] = Router;
});