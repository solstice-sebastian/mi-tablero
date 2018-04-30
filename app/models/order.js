import DS from 'ember-data';

export default DS.Model.extend({
  symbol: DS.attr('string'),
  orderId: DS.attr('number'),
  clientOrderId: DS.attr('number'),
  price: DS.attr('number'),
  origQty: DS.attr('number'),
  executedQty: DS.attr('number'),
  status: DS.attr('string'),
  timeInForce: DS.attr('number'),
  type: DS.attr('string'),
  side: DS.attr('string'),
  stopPrice: DS.attr('number'),
  icebergQty: DS.attr('number'),
  time: DS.attr('number'),
  isWorking: DS.attr('boolean'),
  dashboard: DS.belongsTo('dashboard'),
});
