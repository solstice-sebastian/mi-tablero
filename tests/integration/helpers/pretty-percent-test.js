import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | pretty-percent', (hooks) => {
  setupRenderingTest(hooks);

  test('it rounds down', async function(assert) {
    this.set('inputValue', '0.123412');

    await render(hbs`{{pretty-percent inputValue}}`);

    assert.equal(this.element.textContent.trim(), '12.34%');
  });

  test('it rounds up', async function(assert) {
    this.set('inputValue', '0.123451');

    await render(hbs`{{pretty-percent inputValue}}`);

    assert.equal(this.element.textContent.trim(), '12.35%');
  });
});
