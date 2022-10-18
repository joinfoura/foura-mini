const supertest = require('supertest');
const app = require('../../app');
const Models = require('../../models');


describe('GET /users', () => {
  describe('when no users exist', () => {
    let user;
    let response;

    beforeEach(async() => {
      response = await supertest(app).get('/users');
    });

    test('it returns status 200', () => {
      expect(response.statusCode).toBe(200);
    });

    test('it returns empty list of users', () => {
      expect(response.body).toMatchObject({ users: [] });
    });
  });

  describe('when a user exists', () => {
    let user;
    let response;

    beforeEach(async() => {
      user = await Models.User.create({
        email: 'tester@joinfoura.com',
        firstName: 'Tester'
      });

      response = await supertest(app).get('/users');
    });

    test('it returns status 200', () => {
      expect(response.statusCode).toBe(200);
    });

    test('it returns list containing user', () => {
      expect(response.body).toMatchObject({
        users: [{
          id: user.id,
          firstName: user.firstName,
          email: user.email
        }]
      });
    });
  });
});
