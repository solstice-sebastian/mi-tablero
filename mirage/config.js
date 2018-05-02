import dashboardMock from './mocks/dashboard';

export default function() {
  this.urlPrefix = 'http://localhost:5000';
  this.namespace = '';
  this.get('/dashboards', () => dashboardMock);
}
