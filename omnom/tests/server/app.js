var expect = require('chai').expect,
    request = require('superagent');

describe('Web Server', function() {
  describe('routing', function() {
    it('should have a route for "/"', function(done) {
      request.get('localhost:3000').end(function(res) {
        expect(res).to.exist;
        expect(res.status).to.equal(200);
        done();
      });
    });
  });
});

describe('API Server', function() {
  describe('routing', function() {
    it('should have a route for "/api"', function(done) {
      request.get('localhost:3000/api').end(function(res) {
        expect(res).to.exist;
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('message');
        done();
      });
    });
  });
});
