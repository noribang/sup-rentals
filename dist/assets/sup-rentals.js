"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('sup-rentals/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _emberfireAdaptersFirebase) {
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({});
});
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
define('sup-rentals/components/new-rental', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		addNewRental: false,
		actions: {
			rentalFormShow: function rentalFormShow() {
				this.set('addNewRental', true);
			}
		}
	});
});
define('sup-rentals/components/rental-tile', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		isImageShowing: false,
		actions: {
			imageShow: function imageShow() {
				this.set('isImageShowing', true);
			},
			imageHide: function imageHide() {
				this.set('isImageShowing', false);
			},
			'delete': function _delete(rental) {
				if (confirm('Are you sure you want to delete this rental?')) {
					this.sendAction('destroyRental', rental);
				}
			}
		}
	});
});
define('sup-rentals/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('sup-rentals/helpers/app-version', ['exports', 'ember', 'sup-rentals/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _supRentalsConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _supRentalsConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('sup-rentals/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('sup-rentals/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('sup-rentals/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'sup-rentals/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _supRentalsConfigEnvironment) {
  var _config$APP = _supRentalsConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('sup-rentals/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('sup-rentals/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('sup-rentals/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('sup-rentals/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
});
define('sup-rentals/initializers/export-application-global', ['exports', 'ember', 'sup-rentals/config/environment'], function (exports, _ember, _supRentalsConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_supRentalsConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _supRentalsConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_supRentalsConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('sup-rentals/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('sup-rentals/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('sup-rentals/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("sup-rentals/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('sup-rentals/models/rental', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		owner: _emberData['default'].attr(),
		city: _emberData['default'].attr(),
		type: _emberData['default'].attr(),
		image: _emberData['default'].attr(),
		bedroom: _emberData['default'].attr()
	});
});
define('sup-rentals/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
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
define('sup-rentals/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('sup-rentals/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('sup-rentals/routes/index', ['exports', 'ember'], function (exports, _ember) {

	// var rentals = [{
	//   id: 1,
	//   owner: "Veruca Salt",
	//   city: "San Francisco",
	//   type: "Estate",
	//   bedrooms: 15,
	//   image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
	// }, {
	//   id: 2,
	//   owner: "Mike TV",
	//   city: "Seattle",
	//   type: "Condo",
	//   bedrooms: 1,
	//   image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg"
	// }, {
	//   id: 3,
	//   owner: "Violet Beauregarde",
	//   city: "Portland",
	//   type: "Apartment",
	//   bedrooms: 3,
	//   image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
	// }];

	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			//MODEL HOOK
			//this.store REFERS TO FIREBASE DATA STORE
			//RETURNS OBECTS FROM rentals.json
			return this.store.findAll('rental');
		},

		actions: {
			destroyRental: function destroyRental(rental) {
				rental.destroyRecord();
				this.transitionTo('index');
			}
		}
	});
});
define('sup-rentals/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('sup-rentals/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _emberfireServicesFirebaseApp) {
  exports['default'] = _emberfireServicesFirebaseApp['default'];
});
define('sup-rentals/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _emberfireServicesFirebase) {
  exports['default'] = _emberfireServicesFirebase['default'];
});
define("sup-rentals/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6DuVs/5Q", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"About Super Rentals\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"The Super Rentals website was created to explore the wonderful world of Ember.js. This project allows us to imagine traveling the world while simultaneously traversing the pathways of the Ember framework!\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"link-to\"],[\"contact\"],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Click here to contact us.\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sup-rentals/templates/about.hbs" } });
});
define("sup-rentals/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "LdfTyJkQ", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "sup-rentals/templates/application.hbs" } });
});
define("sup-rentals/templates/components/new-rental", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "/oKJ7SDc", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"addNewRental\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"rentalFormShow\"]],[\"flush-element\"],[\"text\",\"New Rental\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"New Rental\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"form\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"owner\"],[\"flush-element\"],[\"text\",\"Owner\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\"],[[\"get\",[\"owner\"]],\"owner\"]]],false],[\"text\",\"\\n\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sup-rentals/templates/components/new-rental.hbs" } });
});
define("sup-rentals/templates/components/rental-tile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "HffK8Zh8", "block": "{\"statements\":[[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"append\",[\"unknown\",[\"rental\",\"owner\"]],false],[\"text\",\"'ssss \"],[\"append\",[\"unknown\",[\"rental\",\"type\"]],false],[\"text\",\" in \"],[\"append\",[\"unknown\",[\"rental\",\"city\"]],false],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isImageShowing\"]]],null,1,0],[\"text\",\"\\t\"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"rental\"]]]],[\"flush-element\"],[\"text\",\"Delete Rental\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\\t\"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"imageShow\"]],[\"flush-element\"],[\"text\",\"Show image\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"unknown\",[\"rental\",\"image\"]],null],[\"dynamic-attr\",\"alt\",[\"unknown\",[\"rental\",\"type\"]],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"imageHide\"]],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sup-rentals/templates/components/rental-tile.hbs" } });
});
define("sup-rentals/templates/contact", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "UhQIYbCD", "block": "{\"statements\":[[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Super Rentals Representatives would love to help you choose a destination or answer any burning questions you may have.\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Contact us today!\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  Super Rentals Headquarters\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  1212 Test Address Avenue\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  TestyMcTestington, OR 97233\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"(503) 555-1212\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"superrentalsrep@superrentals.com\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"link-to\"],[\"about\"],null,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"About\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sup-rentals/templates/contact.hbs" } });
});
define("sup-rentals/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "UPrR/DqX", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\" Welcome to Super Rentals \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"We hope you find exactly what you're looking for in a place to stay.\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,2],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"new-rental\"],null,[[\"saveRental2\"],[\"saveRental3\"]]],false],[\"text\",\"\\n\\n\"],[\"block\",[\"link-to\"],[\"about\"],null,1],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"contact\"],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Click here to contact us.\"]],\"locals\":[]},{\"statements\":[[\"text\",\"About\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"helper\",[\"rental-tile\"],null,[[\"rental\",\"destroyRental\"],[[\"get\",[\"rental\"]],\"destroyRental\"]]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"rental\"]}],\"hasPartials\":false}", "meta": { "moduleName": "sup-rentals/templates/index.hbs" } });
});
define('sup-rentals/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('sup-rentals/config/environment', ['ember'], function(Ember) {
  var prefix = 'sup-rentals';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("sup-rentals/app")["default"].create({"name":"sup-rentals","version":"0.0.0+4600aca0"});
}

/* jshint ignore:end */
//# sourceMappingURL=sup-rentals.map
