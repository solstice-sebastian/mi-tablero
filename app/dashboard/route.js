import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('dashboard').then(() => this.store.peekAll('dashboard-asset'));
  },
});
