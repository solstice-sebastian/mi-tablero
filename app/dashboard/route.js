import Route from '@ember/routing/route';
import { get, set } from '@ember/object';
import getPercentDiff from 'utils/get-percent-diff.js';

export default Route.extend({
  model() {
    return this.store.findAll('dashboard').then(() =>
      this.store.peekAll('dashboard-asset').map((dashboardAsset) => {
        const newOrder = this.buildNewOrder(dashboardAsset);
        set(dashboardAsset, 'newOrder', newOrder);
        return dashboardAsset;
      })
    );
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
});
