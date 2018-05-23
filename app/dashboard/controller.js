import Controller from '@ember/controller';
import { set } from '@ember/object';
import { empty } from '@ember/object/computed';

export default Controller.extend({
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
  },
});
