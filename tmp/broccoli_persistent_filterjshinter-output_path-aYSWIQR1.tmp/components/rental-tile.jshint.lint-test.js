QUnit.module('JSHint | components/rental-tile.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/rental-tile.js should pass jshint.\ncomponents/rental-tile.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/rental-tile.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/rental-tile.js: line 12, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
});
