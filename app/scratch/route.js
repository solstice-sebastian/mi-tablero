import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return { value: '5' };
  },

  // setupController(controller, model) {
  //   this._super(controller, model);
  //   controller.set('model.value', model);
  // },
});
