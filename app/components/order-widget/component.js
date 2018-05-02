import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
  classNames: ['order-widget', 'statusClass', 'profitLossClass'],

  order: null,

  statusClass: computed('order.status', function() {
    const status = get(this, 'order.status');
    return String.dasherize(status);
  }),

  profitLossClass: computed('order.profitLoss', function() {
    const profitLoss = get(this, 'order.profitLoss');
    return profitLoss > 0.001 ? 'positive' : 'negative';
  }),
});
