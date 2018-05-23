import dashboardMock from './mocks/dashboard';
import fetch from './mocks/tickers';
import ENV from '../config/environment';

export default function() {
  this.urlPrefix = ENV.VARS.API_HOST;
  this.namespace = '';
  this.get('/dashboards', () => dashboardMock);
  this.get('/tickers', () => fetch());
  this.post('/notifications');
}
