import { later } from '@ember/runloop';
import dashboardMock from './mocks/dashboard';
import fetch from './mocks/tickers';
import ENV from '../config/environment';

export default function() {
  this.urlPrefix = ENV.VARS.API_HOST;
  this.namespace = '';
  // this.get('/dashboards', () => dashboardMock);
  this.get(
    '/dashboards',
    () =>
      new Promise((res) => {
        later(() => res(dashboardMock), 1000 * 60 * 60);
      })
  );
  this.get('/tickers', () => fetch());
  this.post('/notifications');
  // this.passthrough('/notifications');
}
