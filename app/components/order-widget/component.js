import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import getPercentDiff from '../../utils/get-percent-diff';

export default Component.extend({
  classNames: ['order-widget', 'statusClass', 'profitLossClass'],

  order: null,

  /**
   * @param {Number} passed from dashboardAsset
   */
  currentPrice: null,

  profitLoss: computed('currentPrice', 'order.price', function() {
    const price = get(this, 'order.price');
    const currentPrice = get(this, 'currentPrice');
    return getPercentDiff(currentPrice, price);
  }),

  stopLimitDifference: computed('order.{price,stopPrice}', function() {
    const { price, stopPrice } = get(this, 'order');
    return getPercentDiff(price, stopPrice);
  }),

  statusClass: computed('order.status', function() {
    const status = get(this, 'order.status');
    return String.dasherize(status);
  }),

  profitLossClass: computed('profitLoss', function() {
    const profitLoss = get(this, 'profitLoss');
    return profitLoss > 0.001 ? 'positive' : 'negative';
  }),

  actions: {
    changeLimitPrice(value) {
      set(this, 'order.price', value);
    },

    changeStopPrice(value) {
      set(this, 'order.stopPrice', value);
    },
  },
});
