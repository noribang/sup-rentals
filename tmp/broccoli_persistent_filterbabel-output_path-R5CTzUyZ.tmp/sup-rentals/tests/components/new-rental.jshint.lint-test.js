define('sup-rentals/tests/components/new-rental.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/new-rental.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/new-rental.js should pass jshint.\ncomponents/new-rental.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/new-rental.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/new-rental.js: line 6, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/new-rental.js: line 10, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n4 errors');
  });
});