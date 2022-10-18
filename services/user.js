const Models = require('../models');

module.exports = {
  findAll: async () => {
    const users = await Models.User.findAll({
      order: [['id', 'DESC']]
    });

    return users.map((user) => user.toJSON());
  }
};
