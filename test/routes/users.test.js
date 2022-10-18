const supertest = require('supertest');
const app = require('../../app');

describe('GET /users', () => {
  describe('when no users exist', () => {
    test('it should return 200 no users', async () => {
      const response = await supertest(app).get('/users');

      expect(response.statusCode).toBe(200);
      expect(response.body).toMatchObject({ users: [] });
    });
  });
});

