import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import getPercentDiff from '../../utils/get-percent-diff';
import calcPrettyPercent from '../../utils/calc-pretty-percent';

export default Component.extend({
  classNames: ['order-widget'],

  order: null,
  sliderValue: 5,

  /**
   * @param {Number} passed from dashboardAsset
   */
  currentPrice: null,

  profitLoss: computed('currentPrice', 'order.price', function() {
    const price = get(this, 'order.price');
    const currentPrice = get(this, 'currentPrice');
    return getPercentDiff(currentPrice, price);
  }),

  stopPriceDiff: computed('order.{price,stopPrice}', function() {
    const { price, stopPrice } = get(this, 'order');
    const diff = getPercentDiff(price, stopPrice);
    const prettyPercent = calcPrettyPercent(diff);
    return prettyPercent;
  }),

  stopPriceLabel: computed('stopPriceDiff', function() {
    const stopPriceDiff = get(this, 'stopPriceDiff');
    return `Stop limit : ${stopPriceDiff}`;
  }),

  priceMax: computed(function() {
    const price = +get(this, 'order.price');
    return price * 2;
  }),

  priceMin: computed(function() {
    const price = +get(this, 'order.price');
    return Math.max(Math.floor(price / 2), 0.000001);
  }),

  statusClass: computed('order.status', function() {
    const status = get(this, 'order.status');
    return String.dasherize(status);
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
