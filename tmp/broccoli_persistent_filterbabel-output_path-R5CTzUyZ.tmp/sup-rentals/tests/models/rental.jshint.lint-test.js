define('sup-rentals/tests/models/rental.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/rental.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/rental.js should pass jshint.\nmodels/rental.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/rental.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});