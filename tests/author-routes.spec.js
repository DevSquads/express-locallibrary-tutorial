const request = require('request');
const chai = require('chai');
const mongoose_connection = require('../app').db;
const mongoose = require('mongoose');
var mongoDB = process.env.TEST_MONGODB_URI;
const Author = require('../models/author')
test_author = {
  "first_name": "Cocky",
  "family_name": "Juggernaut",
  "date_of_birth": "1989-01-03",
  "date_of_death:": ""
}
describe('Author ', function () {
  it('Create new author ', function (done) {
    console.log('in test');
        request.post("http://localhost:3000/catalog/author/create/", {
          json: test_author
        }, (error, res, body) => {
          expect(res.statusCode).toBe(302);
          var test_author = Author.find({first_name: 'Juggernaut'});
          expect(test_author.family_name).toEqual(test_author.family_name);
          expect(test_author.first_name).toEqual(test_author.first_name);
          expect(test_author.date_of_birth).toEqual(test_author.date_of_birth);
          expect(test_author.date_of_death).toEqual(undefined);
          done();
        });
  });

  afterEach(async (done) => {
    await mongoose_connection.dropDatabase();
    await mongoose_connection.close();
    done();
  });
});
