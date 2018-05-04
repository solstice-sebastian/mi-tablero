import DS from 'ember-data';
import { computed, get } from '@ember/object';

const { Model, attr } = DS;

export default Model.extend({
  symbol: attr('string'),
  price: attr('number'),

  base: computed('symbol', function() {
    const symbol = get(this, 'symbol');
    if (symbol.endsWith('USDT')) {
      return symbol.slice(-4);
    }
    return symbol.slice(-3);
  }),

  asset: computed('base', function() {
    const symbol = get(this, 'symbol');
    const base = get(this, 'base');
    return symbol.replace(base, '');
  }),
});
