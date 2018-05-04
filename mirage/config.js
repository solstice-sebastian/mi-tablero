import dashboardMock from './mocks/dashboard';
import tickers from './mocks/tickers';

export default function() {
  this.urlPrefix = 'http://localhost:5000';
  this.namespace = '';
  this.get('/dashboards', () => dashboardMock);
  this.get('/tickers', () => tickers);
}
