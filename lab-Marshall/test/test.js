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
      console.log('Server up on 3000!');
      done();
    });
  });

  after((done) => {
    server.close();
    done();
  });

  it('should post a name', (done) => {
    request('localhost:3000')
      .post('/api/students')
      .send({
        name: 'marshall'
      })
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.body.name).to.eql('marshall');
        done();
      });
  });

  it('should return an error on a bad POST', (done) => {
    request('localhost:3000')
      .post('/api/students')
      .send({
        fake: 'fake'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.eql('bad request');
        done();
      });
  });

  // it('should get names', (done) => {
  //   request(server)
  //     .get('api/students')
  //     .end((err, res) => {
  //       expect(err).to.eql(null);
  //       expect(res).to.have.status(200);
  //       expect(res.body.name).to.eql('marshall');
  //       done();
  //     });
  // });
});
