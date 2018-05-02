import DS from 'ember-data';
import { empty } from '@ember/object/computed';

const { attr, Model } = DS;

export default Model.extend({
  symbol: attr('string'),
  orderId: attr('number'),
  clientOrderId: attr('number'),
  price: attr('number'),
  origQty: attr('number'),
  executedQty: attr('number'),
  status: attr('string'),
  timeInForce: attr('number'),
  type: attr('string'),
  side: attr('string'),
  stopPrice: attr('number'),
  icebergQty: attr('number'),
  time: attr('number'),
  isWorking: attr('boolean'),
  profitLoss: attr('number'),

  isNew: empty('orderId'),
});
