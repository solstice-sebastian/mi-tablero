import Route from '@ember/routing/route';
import { set, get, computed } from '@ember/object';

export default Route.extend({
  setupController(controller, error) {
    this._super(controller, error);
    set(controller, 'error', error);
    set(controller, 'stackLines', this.getStackLines(error));
  },

  getStackLines({ stack }) {
    const lines = stack.split(/\s{1,}at/g);
    return lines;
  },
});
