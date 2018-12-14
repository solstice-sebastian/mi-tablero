import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import { isNone } from '@ember/utils';
import { inject } from '@ember/service';
import getPercentDiff from '../../utils/get-percent-diff';
import calcPrettyPercent from '../../utils/calc-pretty-percent';

const ONE_SATOSHI = 0.00000001;

export default Component.extend({
  store: inject(),
  classNames: ['order-widget'],

  order: null,
  sliderValue: 5,
  stepValue: computed('order.isUsd', function() {
    if (get(this, 'order.isUsd')) {
      return 0.01;
    }
    return ONE_SATOSHI * 5;
  }),

  /**
   * @param {Number} currentPrice passed from dashboardAsset
   */
  currentPrice: null,

  orderProfitLoss: computed('currentPrice', 'order.price', function() {
    const price = get(this, 'order.price');
    const currentPrice = get(this, 'currentPrice');
    return getPercentDiff(currentPrice, price);
  }),

  totalProfitLoss: computed('lastBuyIn', 'order.price', function() {
    const lastBuyInPrice = get(this, 'lastBuyIn.price');
    const orderPrice = get(this, 'order.price');
    return getPercentDiff(lastBuyInPrice, orderPrice);
  }),

  stopPriceDiff: computed('order.{price,stopPrice}', function() {
    const order = get(this, 'order');
    if (isNone(order) === false) {
      const { price, stopPrice } = get(this, 'order');
      const diff = getPercentDiff(price, stopPrice);
      const prettyPercent = calcPrettyPercent(diff);
      return prettyPercent;
    }
    return Number.NaN;
  }),

  stopPriceLabel: computed('stopPriceDiff', function() {
    const stopPriceDiff = get(this, 'stopPriceDiff');
    return `Stop limit : ${stopPriceDiff}`;
  }),

  priceMax: computed(function() {
    const price = +get(this, 'order.price');
    return price * 1.25;
  }),

  priceMin: computed(function() {
    const price = +get(this, 'order.price');
    return Math.max(price * 0.75, 0.000001);
  }),

  stopPriceMin: computed('order.price', function() {
    const price = +get(this, 'order.price');
    return price * 0.75;
  }),

  stopPriceMax: computed('order.price', function() {
    const price = get(this, 'order.price');
    return price * 1.25;
  }),

  statusClass: computed('order.status', function() {
    const status = get(this, 'order.status');
    return String.dasherize(status);
  }),

  actions: {
    decValue(value, actionName) {
      const stepValue = +get(this, 'stepValue');
      this.send(actionName, +value - stepValue);
    },

    incValue(value, actionName) {
      const stepValue = get(this, 'stepValue');
      this.send(actionName, +value + stepValue);
    },

    changeLimitPrice(value) {
      if (typeof (+value).toFixed === 'function') {
        set(this, 'order.price', (+value).toFixed(8));
      } else {
        set(this, 'order.price', value);
      }
    },

    changeStopPrice(value) {
      if (typeof (+value).toFixed === 'function') {
        set(this, 'order.stopPrice', (+value).toFixed(8));
      } else {
        set(this, 'order.stopPrice', value);
      }
    },

    createNotification(order) {
      const price = get(order, 'price');
      const symbol = get(order, 'symbol');
      const store = get(this, 'store');
      const notification = store.createRecord('notification', { symbol, price });
      return notification.save();
    },
  },
});
