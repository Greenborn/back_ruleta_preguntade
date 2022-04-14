'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categoria', [
      { color: '#dfdd48', nombre: 'Mitología',   createdAt: new Date(),  updatedAt: new Date() },
      { color: '#7d03ff', nombre: 'Deportes',    createdAt: new Date(),  updatedAt: new Date() },
      { color: '#ff8203', nombre: 'Gastronomía', createdAt: new Date(),  updatedAt: new Date() },
      { color: '#36dc22', nombre: 'Música',      createdAt: new Date(),  updatedAt: new Date() },
      { color: '#FFFFFF', nombre: 'Ciencia',     createdAt: new Date(),  updatedAt: new Date() },
      { color: '#0bace8', nombre: 'Política',    createdAt: new Date(),  updatedAt: new Date() },
      { color: '#bf32b7', nombre: 'Cine',        createdAt: new Date(),  updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categoria', null, {});
  }
};
