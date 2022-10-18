/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.TEXT
      },
      first_name: {
        type: Sequelize.TEXT
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('users');
  }
};
