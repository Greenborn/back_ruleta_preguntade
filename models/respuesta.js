'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Respuesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Respuesta.init({
    id_pregunta: DataTypes.INTEGER,
    texto: DataTypes.STRING,
    correcta: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Respuesta',
  });
  Respuesta.associate = function(models) {
    Respuesta.belongsTo(models.Pregunta, {foreignKey: 'id_pregunta', as: 'pregunta'})
  };
  return Respuesta;
};