'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Preguntas_Sesion_juego', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sesion_id: {
        type: Sequelize.INTEGER,
        references: {         
            model: 'Sesion_juego',
            key: 'id'
        }
      },
      pregunta_id: {
        type: Sequelize.INTEGER,
        references: {         
            model: 'Pregunta',
            key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Preguntas_Sesion_juego');
  }
};