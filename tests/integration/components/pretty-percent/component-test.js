import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | pretty-percent', function(hooks) {
  setupRenderingTest(hooks);

  test('default state', async function(assert) {
    this.set('value', 0.12);
    await render(hbs`{{pretty-percent value=value}}`);

    assert.equal(this.element.textContent.trim(), '12.00%');
    assert.deepEqual(this.element.classList, ['pretty-percent', 'positive']);
  });
});
