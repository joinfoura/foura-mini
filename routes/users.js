var express = require('express');

const Models = require('../models');

var router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await Models.User.findAll();

    const usersJson = users.map((user) => {
      return {
        id: user.id,
        email: user.email,
        firstName: user.firstName
      };
    });

    res.json({ users: usersJson });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
