var should = require('should');
var httpClient = require('../test/httpClient');
/*
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});*/

/*
var lib = require('../lib');
describe('parseAsync', function () {
    it('should be ok', function (done) {
        lib.parseAsync('{"name":"Luna"}', function (err,data) {
            should.not.exist(err);
            data.name.should.be.equal('Luna');
            done();
        })
    })
});*/

describe('post  http://localhost/users', function () {
   it('should response {"name":"Diana","age":18,"sex":"female"}', function (done) {
       httpClient.httpClient({
           url     : 'http://localhost:3000/users',
           method  : 'post',
           data    : {
               name : 'Diana',
               age  : 18,
               sex  : 'female'
           }
       }, function (err,response) {
           should.not.exists(err);
           response.name.should.be.equal('Diana');
           response.age.should.be.equal(18);
           response.sex.should.be.equal('female');
           done();
       });
   })
});
