module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('Balances', {
      id: Sequelize.UUID,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
      deleted_at: Sequelize.DATE,
      type: Sequelize.BIGINT,
      amount: Sequelize.REAL,
    });
  },

  async down(queryInterface) {
    queryInterface.dropTable('Balances');
  },
};
