import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | application', (hooks) => {
  setupTest(hooks);

  test('it exists', (assert) => {
    const route = this.owner.lookup('route:application');
    assert.ok(route);
  });
});
