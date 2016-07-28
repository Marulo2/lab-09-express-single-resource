'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

const app = require('../server');
let server;


describe('CRUD TESTS', () => {
  before((done) => {
    server = app.listen(3000, () => {
      console.log('up on 3000');
      done();
    });
  });

  after((done) => {
    server.close();
    done();
  });

  it('should post a name', () => {
    request('localhost:3000')
      .post('/api/students')
      .send({
        name: 'marshall'
      })
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.body.name).to.eql('marshall');
      });
  });

});
