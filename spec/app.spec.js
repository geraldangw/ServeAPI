var app = require('../app');
var request = require("request");
var supertest = require("supertest");
var base_url = "http://localhost:7000/";
var about_url = base_url + 'about';
var contact_url = base_url + 'contact';

// function check200(err, response, body) {
//   expect(response.statusCode).toBe(200);
//   done();
// }


describe("Express Server API", function() {
  describe("should return users json on get /users", function() {
      it("returns status code 200", function(done) {
        supertest(app)
          .get('/users')
          .expect('Content-Type', /json/)
          .expect(200, done);
      });

      it("returns a correct json format", function(done) {
        supertest(app)
          .get('/users')
          .expect([
            {
              name: 'Gerald',
              age: 33,
              email: 'mailto:geraldangw@gmail.com'
            },
            {
              name: 'Ben Yang',
              age: 31,
              email: 'mailto:benyang00@gmail.com'
            },
            {
              name: 'Weiyang',
              age: 81,
              email: 'mailto:thetaiwanese@gmail.com'
            },
            {
              name: 'Jen',
              age: 12,
              email: 'mailto:jen@gmail.com'
            },
            {
              name: 'Chong',
              age: 25,
              email: 'mailto:chong@gmail.com'
            },
          ], done);
      });
  });
});
