var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();
var expect = chai.expect;
chai.use(chaiHttp);

describe('Server', function() {
  describe('/', function() {
    it('responds with status 200', function(done) {
      chai.request(server)
        .get('/')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
