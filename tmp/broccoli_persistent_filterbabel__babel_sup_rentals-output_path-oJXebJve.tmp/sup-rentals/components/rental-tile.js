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