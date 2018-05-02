import DS from 'ember-data';

export default DS.Model.extend({
  asset: DS.attr('string'),
  free: DS.attr('number'),
  locked: DS.attr('number'),
  qty: DS.attr('number'),
});
