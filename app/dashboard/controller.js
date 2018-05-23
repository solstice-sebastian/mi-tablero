import Controller from '@ember/controller';
import { set, get } from '@ember/object';
import { empty } from '@ember/object/computed';
import { inject } from '@ember/service';

export default Controller.extend({
  store: inject(),
  queryParams: ['base'],

  hasNewOrder: false,

  isEmpty: empty('model'),

  actions: {
    createOrder(activeAsset) {
      set(activeAsset, 'hasNewOrder', true);
      this.send('create', activeAsset);
    },

    removeOrder(activeAsset) {
      set(activeAsset, 'hasNewOrder', false);
      this.send('remove', activeAsset);
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
