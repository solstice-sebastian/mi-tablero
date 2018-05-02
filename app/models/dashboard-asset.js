import { gt } from '@ember/object/computed';
import DS from 'ember-data';

export default DS.Model.extend({
  asset: DS.attr('string'),
  currentPrice: DS.attr('number'),
  currentProfitLoss: DS.attr('number'),
  openOrders: DS.hasMany('order'),
  lastBuyIn: DS.belongsTo('order'),

  isPositive: gt('currentProfitLoss', 0.0001),
});
