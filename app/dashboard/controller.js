import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['base'],

  actions: {
    createOrder(activeAsset) {
      this.send('create', activeAsset);
    },
  },
});
