import Route from '@ember/routing/route';
import { get, set } from '@ember/object';
import { isNone } from '@ember/utils';
import { inject } from '@ember/service';
import { later } from '@ember/runloop';

export default Route.extend({
  tickerService: inject('ticker'),

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
    this.startPolling(2000);
  },

  async startPolling(timeout = 5000) {
    const tickerService = get(this, 'tickerService');
    const tickers = await tickerService.update();
    this.onTickerUpdate(tickers);
    const timer = later(this, this.startPolling, timeout);
    return timer;
  },

  onTickerUpdate(tickers) {
    const store = get(this, 'store');
    const assets = store.peekAll('dashboard-asset');
    assets.forEach((asset) => {
      const symbol = `${get(asset, 'asset')}${get(asset, 'base')}`;
      // find ticker
      const ticker = tickers.findBy('symbol', symbol);
      if (isNone(ticker) === false) {
        const currentPrice = get(ticker, 'price');
        if (currentPrice !== get(asset, 'currentPrice')) {
          asset.updatePrice(currentPrice);
        }
      }
    });
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
