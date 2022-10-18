const express = require('express');

const User = require('../services/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();

    res.json({ users });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
