import Service, { inject } from '@ember/service';
import { get, set } from '@ember/object';
import { later } from '@ember/runloop';
import { isNone } from '@ember/utils';

export default Service.extend({
  store: inject(),

  timer: null,

  async update() {
    const store = get(this, 'store');
    const tickers = await store.findAll('ticker');
    return tickers;
  },

  startPolling(timeout = 5000) {
    this.update();

    const timer = get(this, 'timer');
    if (isNone(timer) === false) {
      const newTimer = later(this, this.startPolling, timeout);
      set(this, 'timer', newTimer);
      return newTimer;
    }
    return null;
  },

  stopPolling() {
    set(this, 'timer', null);
  },

  getBaseValue(asset, qty) {
    const store = get(this, 'store');
    const tickers = store.peekAll('ticker');
    const ticker = tickers.findBy('asset', asset);
    if (isNone(ticker)) {
      // console.log(`did not find ticker for ${asset}`);
      return 'N/A';
    }
    const basePrice = +get(ticker, 'price');
    return (basePrice * +qty).toFixed(8);
  },
});
