import Route from '@ember/routing/route';
import { get, set } from '@ember/object';
import getPercentDiff from '../utils/get-percent-diff';

export default Route.extend({
  model() {
    return this.store.findAll('dashboard').then(() => this.store.peekAll('dashboard-asset'));
  },

  buildNewOrder(dashboardAsset) {
    const price = get(dashboardAsset, 'currentPrice');
    const stopPrice = get(dashboardAsset, 'currentPrice');
    // profit loss from current price
    const profitLoss = getPercentDiff(price, stopPrice);
    return this.store.createRecord('order', {
      price,
      profitLoss,
      stopPrice,
    });
  },

  actions: {
    create(dashboardAsset) {
      const newOrder = this.buildNewOrder(dashboardAsset);
      const orders = get(dashboardAsset, 'openOrders');
      orders.addObject(newOrder);
      console.log('added', newOrder);
    },
  },
});
