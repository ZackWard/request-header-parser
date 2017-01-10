var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
var server = require('../request-header-parser');

chai.use(chaiHttp);

describe('[base url]/api/whoami', function () {
    var response;

    before(function (done) {
        chai.request(server)
            .get('/api/whoami')
            .set('Accept-Language', 'US-en')
            .end(function (err, res) {
                if (err) {
                    done(err);
                }
                response = res;
                done();
            });
    });

    it('should return a 200 status', function (done) {
        expect(response).to.have.status(200);
        done();
    });

    it('should return a json object', function (done) {
        expect(response).to.be.json;
        done();
    });

    it('should return an object with an ipaddress field that has a string value', function (done) {
        expect(response.body).to.have.property('ipaddress');
        expect(response.body.ipaddress).to.be.an.ip;
        done();
    });

    it('should return an object with a language field that has a string value', function (done) {
        expect(response.body).to.have.property('language');
        expect(response.body.language).to.be.a('string');
        done();
    });

    it('should return an object with a software field that has a string value', function (done) {
        expect(response.body).to.have.property('software');
        expect(response.body.software).to.be.a('string');
        done();
    });
});
