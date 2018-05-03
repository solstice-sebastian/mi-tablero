import getPercentDiff from 'mi-tablero/utils/get-percent-diff';
import { module, test } from 'qunit';

module('Unit | Utility | get-percent-diff', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    assert.strictEqual(
      getPercentDiff(42, 42.84, 2),
      0.02,
      'should return percent increase as float'
    );
    assert.strictEqual(
      getPercentDiff(42, 41.28, 2),
      -0.02,
      'should return percent descrease as float'
    );
    assert.strictEqual(
      getPercentDiff(0.00083, 0.00099, 2),
      0.19,
      'should work on fractions: increase'
    );
    assert.strictEqual(
      getPercentDiff(0.00099, 0.00083, 2),
      -0.16,
      'should work on fractions: decrease'
    );
  });
});
