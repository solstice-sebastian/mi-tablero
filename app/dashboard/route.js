import Route from '@ember/routing/route';
import { get, set } from '@ember/object';
import { isNone } from '@ember/utils';

export default Route.extend({
  base: 'BTC',

  model({ base }) {
    if (isNone(base) === false) {
      set(this, 'base', base);
    }
    return this.store.findAll('dashboard').then(() => this.store.peekAll('dashboard-asset'));
  },

  setupController(controller, model) {
    this._super(controller, model);
    set(controller, 'model', model);
    set(controller, 'base', get(this, 'base'));
  },

  buildNewOrder(dashboardAsset) {
    const price = get(dashboardAsset, 'currentPrice');
    const stopPrice = get(dashboardAsset, 'currentPrice');
    // profit loss from current price
    const symbol = `${get(dashboardAsset, 'asset')}${get(this, 'base')}`;
    return this.store.createRecord('order', {
      symbol,
      price,
      stopPrice,
    });
  },

  actions: {
    create(dashboardAsset) {
      const newOrder = this.buildNewOrder(dashboardAsset);
      const orders = get(dashboardAsset, 'openOrders');
      orders.addObject(newOrder);
    },

    remove(dashboardAsset) {
      const orders = get(dashboardAsset, 'orders');
      const newOrder = orders.findBy('isNew', true);
      orders.removeObject(newOrder);
    },
  },
});
