import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  queryParams: ['base'],

  hasNewOrder: false,

  actions: {
    createOrder(activeAsset) {
      set(this, 'hasNewOrder', true);
      this.send('create', activeAsset);
    },

    removeOrder(activeAsset) {
      set(this, 'hasNewOrder', false);
      this.send('remove', activeAsset);
    },
  },
});
