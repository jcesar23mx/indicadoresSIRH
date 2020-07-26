const {Sequelize, DataTypes} = require('sequelize');
const db = require('../../db');

const sequelize =  db.sequelize; 

const calendario = sequelize.define('vanexoejecucion', {
    p_tipo: {type: DataTypes.STRING, allowNull: false },
    p_ejercicio: {type: DataTypes.INTEGER,  allowNull: false},
    p_importe: {type: DataTypes.DECIMAL,  allowNull: false}
,},
{
    freezeTableName: true,
    timestamps: false
})
calendario.removeAttribute('id');
console.log(calendario == sequelize.models.calendario);

module.exports = calendario;
