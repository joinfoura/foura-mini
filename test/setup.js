const Models = require('../models');

beforeEach(async () => {
  if (process.env.NODE_ENV !== 'test') {
    throw new Error(`NODE_ENV ${process.env.NODE_ENV} must be test`);
  }

  await Models.sequelize.truncate({ cascade: true });
});

// afterAll(async() => {
//   await Models.sequelize.close();
// });
