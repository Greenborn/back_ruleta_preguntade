'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sesion_juego extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sesion_juego.init({
    sesion_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sesion_juego',
  });
  return Sesion_juego;
};