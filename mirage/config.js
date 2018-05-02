import dashboardMock from './mocks/dashabord';

export default function() {
  this.urlPrefix = 'http://localhost:5000'; // make this `http://localhost:8080`, for example, if your API is on a different server
  this.get('/dashboard', () => dashboardMock);
}
