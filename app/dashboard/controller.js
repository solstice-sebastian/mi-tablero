import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createOrder(activeAsset) {
      this.send('create', activeAsset);
    },
  },
});
