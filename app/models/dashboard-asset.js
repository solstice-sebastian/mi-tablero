import { computed, get } from '@ember/object';
import { gt, alias } from '@ember/object/computed';
import DS from 'ember-data';
import getPercentDiff from '../utils/get-percent-diff';

const { attr, hasMany, belongsTo, Model } = DS;

export default Model.extend({
  asset: attr('string'),
  currentPrice: attr('number'),
  openOrders: hasMany('order'),
  lastBuyIn: belongsTo('order'),
  balance: belongsTo('balance'),

  orders: alias('openOrders'),
  isPositive: gt('currentProfitLoss', 0.0001),
  hasOpenOrders: gt('openOrders.length', 0),
  currentProfitLoss: computed('currentPrice', 'lastBuyIn.price', function() {
    const currentPrice = get(this, 'currentPrice');
    const buyInPrice = get(this, 'lastBuyIn.price');
    return getPercentDiff(buyInPrice, currentPrice);
  }),

  uiCurrentPrice: computed('currentPrice', function() {
    const currentPrice = get(this, 'currentPrice');
    return currentPrice.toFixed(8);
  }),
});
