const
    config = require('../../infrastructure/config'),
    request = require("request");

var base_url = `http://localhost:${config.port}/api`;

describe("API testing", function() {
  describe("Task API", function() {
    it("API return tasks", function(done) {
      request.get(base_url + '/tasks', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(body.length > 0);
        done();
      });

    });
  });
});