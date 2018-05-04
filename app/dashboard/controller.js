import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  queryParams: ['base'],

  hasNewOrder: false,

  actions: {
    createOrder(activeAsset) {
      set(activeAsset, 'hasNewOrder', true);
      this.send('create', activeAsset);
    },

    removeOrder(activeAsset) {
      set(activeAsset, 'hasNewOrder', false);
      this.send('remove', activeAsset);
    },
  },
});
