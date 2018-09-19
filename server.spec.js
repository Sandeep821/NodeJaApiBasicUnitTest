var request = require('supertest');
var sinon = require('sinon');
var getData = require('./get-data')
describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('./server');
  });
  afterEach(function () {
    server.close();

});
it('responds to / with getDataMock', function testSlash(done) {
   // var getData = sinon.stub().returns('something');
  //  sinon.stub(getData, function() {'mock'});
  sinon.stub(getData, '()').returns([]);
    request(server)
    .get('/')
    .expect(200, 'mock', done);

  });

  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, 'Data for test', done);
  });

  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});

// ref: https://stackoverflow.com/questions/32695244/how-to-mock-dependency-classes-for-unit-testing-with-mocha-js