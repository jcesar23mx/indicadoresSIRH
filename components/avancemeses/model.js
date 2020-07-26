const {Sequelize, DataTypes} = require('sequelize');
const db = require('../../db');

const sequelize =  db.sequelize; 

const avancemeses = sequelize.define('vavancemeses', {
    p_tipo: {type: DataTypes.STRING, allowNull: false },
    p_ejercicio: {type: DataTypes.INTEGER,  allowNull: false},
    p_mes: {type: DataTypes.STRING,  allowNull: false},
    p_mes_str: {type: DataTypes.STRING, allowNull: false},
    p_importe: {type: DataTypes.DECIMAL,  allowNull: false}
,},
{
    freezeTableName: true,
    timestamps: false
})
avancemeses.removeAttribute('id');
console.log(avancemeses == sequelize.models.avancemeses);

module.exports = avancemeses;
