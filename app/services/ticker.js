import Service, { inject } from '@ember/service';
import { get, set } from '@ember/object';
import { later } from '@ember/runloop';

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

    const timer = later(this, this.startPolling, timeout);
    set(this, 'timer', timer);
    return timer;
  },

  stopPolling() {
    set(this, 'timer', null);
  },
});
