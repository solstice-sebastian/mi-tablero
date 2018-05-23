import { later } from '@ember/runloop';
import dashboardMock from './mocks/dashboard';
import fetch from './mocks/tickers';
import ENV from '../config/environment';

// const DELAY_TIME = 1000 * 60 * 60;
const DELAY_TIME = 5;

export default function() {
  this.urlPrefix = ENV.VARS.API_HOST;
  this.namespace = '';
  this.get(
    '/dashboards',
    () =>
      new Promise((res) => {
        later(() => res(dashboardMock), DELAY_TIME);
      })
  );
  this.get('/tickers', () => fetch());
  this.post('/notifications');
  // this.passthrough('/notifications');
}
