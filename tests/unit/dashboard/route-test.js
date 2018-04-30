import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dashboard', (hooks) => {
  setupTest(hooks);

  test('it exists', (assert) => {
    const route = this.owner.lookup('route:dashboard');
    assert.ok(route);
  });
});
