const { Op } = require('sequelize');
const Models = require('../models');
const { NotFound } = require('../errors');

module.exports = {
  findAll: async () => {
    const users = await Models.User.findAll({
      order: [['id', 'DESC']],
    });

    return users.map((user) => user.toJSON());
  }
};
