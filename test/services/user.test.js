const Models = require('../../models');
const User = require('../../services/user');

describe('User', () => {
  describe('findAll', () => {
    let user;

    beforeEach(async () => {
      user = await Models.User.create({
        email: 'tester@joinfoura.com',
        firstName: 'Tester'
      });
    });

    test('it should set user status to unsubscribed', async () => {
      expect(
        await User.findAll()
      ).toMatchObject([{
        id: user.id,
        email: user.email,
        firstName: user.firstName
      }]);
    });
  });
});
