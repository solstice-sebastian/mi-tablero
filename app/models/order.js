import DS from 'ember-data';
import { computed, get } from '@ember/object';
import { isNone } from '@ember/utils';

const { attr, Model } = DS;

export default Model.extend({
  symbol: attr('string'),
  orderId: attr('number'),
  clientOrderId: attr('number'),
  price: attr('number'),
  origQty: attr('number'),
  executedQty: attr('number'),
  status: attr('string', { defaultValue: 'NEW' }),
  timeInForce: attr('number'),
  type: attr('string'),
  side: attr('string', { defaultValue: 'n/a' }),
  stopPrice: attr('number'),
  icebergQty: attr('number'),
  time: attr('number'),
  isWorking: attr('boolean'),
  profitLoss: attr('number'), // initially provided and/or calculated

  isOpen: computed('status', function() {
    const status = get(this, 'status');
    return status === 'NEW' || status === 'PARTIALLY_FILLED' || status === 'active';
  }),

  prettyPrice: computed('price', function() {
    if (get(this, 'isUsd')) {
      return (+get(this, 'price')).toFixed(2);
    }
    return (+get(this, 'price')).toFixed(8);
  }),

  isUsd: computed('symbol', function() {
    const symbol = get(this, 'symbol');
    if (isNone(symbol)) {
      console.log('missing symbol');
      return false;
    }
    return symbol.toUpperCase().includes('USD');
  }),
});
