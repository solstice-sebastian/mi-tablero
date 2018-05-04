import Service, { inject } from '@ember/service';
import { get, set } from '@ember/object';
import { later } from '@ember/runloop';

export default Service.extend({
  store: inject('store'),

  timer: null,

  async update(timeout = 5000) {
    const store = get(this, 'store');
    const tickers = await store.findAll('ticker');

    if (timeout) {
      const timer = later(this.update, timeout);
      set(this, 'timer', timer);
      return timer;
    }
    return tickers;
  },

  startPolling(timeout) {
    this.update(timeout);
  },

  stopPolling() {
    set(this, 'timer', null);
  },
});
