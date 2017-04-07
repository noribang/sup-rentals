define('sup-rentals/models/rental', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		owner: _emberData['default'].attr(),
		city: _emberData['default'].attr(),
		type: _emberData['default'].attr(),
		image: _emberData['default'].attr(),
		bedroom: _emberData['default'].attr()
	});
});