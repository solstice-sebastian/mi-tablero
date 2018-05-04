import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | ticker', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const service = this.owner.lookup('service:ticker');
    assert.ok(service);
  });
});
