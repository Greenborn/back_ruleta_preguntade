'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pregunta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pregunta.init({
    id_categoria: DataTypes.INTEGER,
    pregunta: DataTypes.STRING,
    respuesta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pregunta',
  });
  Pregunta.associate = function(models) {
    Pregunta.belongsTo(models.Categoria, {foreignKey: 'id_categoria', as: 'categoria'})
  };
  return Pregunta;
};