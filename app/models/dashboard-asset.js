import { gt, alias } from '@ember/object/computed';
import DS from 'ember-data';

const { attr, hasMany, belongsTo, Model } = DS;

export default Model.extend({
  asset: attr('string'),
  currentPrice: attr('number'),
  currentProfitLoss: attr('number'),
  openOrders: hasMany('order'),
  lastBuyIn: belongsTo('order'),
  newOrder: belongsTo('order'),
  balance: belongsTo('balance'),

  orders: alias('openOrders'),
  isPositive: gt('currentProfitLoss', 0.0001),
  hasOpenOrders: gt('openOrders.length', 0),
});
