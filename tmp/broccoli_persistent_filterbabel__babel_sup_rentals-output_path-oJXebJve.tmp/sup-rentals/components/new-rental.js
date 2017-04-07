define('sup-rentals/components/new-rental', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		addNewRental: false,
		actions: {
			rentalFormShow: function rentalFormShow() {
				this.set('addNewRental', true);
			},

			saveRental1: function saveRental1() {
				var params = {};
				this.set();
				this.sendAction();
			}
		} //END ACTIONS
	});
});