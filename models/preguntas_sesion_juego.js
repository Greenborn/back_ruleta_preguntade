'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Preguntas_Sesion_juego extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Preguntas_Sesion_juego.init({
    sesion_id: DataTypes.INTEGER,
    pregunta_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Preguntas_Sesion_juego',
  });
  Preguntas_Sesion_juego.associate = function(models) {
    Preguntas_Sesion_juego.belongsTo(models.Pregunta, {foreignKey: 'pregunta_id', as: 'psj_pregunta'})
  };
  Preguntas_Sesion_juego.associate = function(models) {
    Preguntas_Sesion_juego.belongsTo(models.Sesion_juego, {foreignKey: 'sesion_id', as: 'psj_sesion'})
  };
  return Preguntas_Sesion_juego;
};