import calcPrettyPercent from 'mi-tablero/utils/calc-pretty-percent';
import { module, test } from 'qunit';

module('Unit | Utility | calc-pretty-percent', function() {
  test('calcs percents', function(assert) {
    const result = calcPrettyPercent(0.1234);
    assert.equal(result, '12.34%');
  });
});
