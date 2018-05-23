import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  symbol: attr('string'),
  price: attr('number'),
  note: attr('string'),
});
