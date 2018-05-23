import DS from 'ember-data';
import { computed, get } from '@ember/object';

export default DS.Model.extend({
  asset: DS.attr('string'),
  free: DS.attr('number'),
  locked: DS.attr('number'),
  qty: DS.attr('number'),
  isEmpty: computed('qty', function() {
    const qty = +get(this, 'qty');
    return Number.isNaN(qty) || qty === 0;
  }),
});
