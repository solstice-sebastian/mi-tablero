import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Model | dashboard asset', (hooks) => {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', (assert) => {
    const store = this.owner.lookup('service:store');
    const model = run(() => store.createRecord('dashboard-asset', {}));
    assert.ok(model);
  });
});
