/* eslint-disable */
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('dashboard');
  this.route('scratch');
  this.route('dashboard.error');
});

export default Router;
