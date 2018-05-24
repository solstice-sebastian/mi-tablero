import { computed, get, set } from '@ember/object';
import { gt, alias, not } from '@ember/object/computed';
import { isNone } from '@ember/utils';
import { later } from '@ember/runloop';
import DS from 'ember-data';
import getPercentDiff from '../utils/get-percent-diff';

const { attr, hasMany, belongsTo, Model } = DS;

export default Model.extend({
  asset: attr('string'),
  currentPrice: attr('number'),
  openOrders: hasMany('order'),
  lastBuyIn: belongsTo('order'),
  balance: belongsTo('balance'),

  isUpdatingPrice: false,
  orders: alias('openOrders'),
  isPositive: gt('currentProfitLoss', 0.0001),
  hasOpenOrders: gt('openOrders.length', 0),
  hasBalance: not('balance.isEmpty'),
  currentProfitLoss: computed('currentPrice', 'lastBuyIn.price', function() {
    const currentPrice = get(this, 'currentPrice');
    const buyInPrice = get(this, 'lastBuyIn.price');
    return getPercentDiff(buyInPrice, currentPrice);
  }),

  uiCurrentPrice: computed('currentPrice', function() {
    const currentPrice = +get(this, 'currentPrice');
    if (typeof currentPrice.toFixed === 'function') {
      if (currentPrice > 1) {
        return currentPrice.toFixed(2);
      }
      return currentPrice.toFixed(8);
    }
    return currentPrice;
  }),

  base: computed('lastBuyIn', 'asset', function() {
    const lastBuyIn = get(this, 'lastBuyIn');
    const symbol = get(lastBuyIn, 'symbol');
    if (isNone(symbol) === false) {
      const asset = get(this, 'asset');
      return symbol.replace(asset, '');
    }
    return '';
  }),

  updatePrice(currentPrice) {
    set(this, 'isUpdatingPrice', true);
    set(this, 'currentPrice', currentPrice);
    later(() => {
      set(this, 'isUpdatingPrice', false);
    }, 1000);
  },
});
