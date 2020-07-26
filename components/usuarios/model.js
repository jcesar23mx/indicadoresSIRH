const {Sequelize, DataTypes} = require('sequelize');
const db = require('../../db');

const sequelize =  db.sequelize; 

const t_usuarios = sequelize.define('t_usuarios', {
    u_user: {type: DataTypes.STRING, allowNull: false },
    u_pass: {type: DataTypes.STRING, allowNull: false },
    u_passenc: {type: DataTypes.STRING, allowNull: false },
    u_perfil: {type: DataTypes.INTEGER, allowNull: false },
    u_name: { type: DataTypes.STRING, allowNull: false },
    u_numemp: {type: DataTypes.STRING, allowNull: false }
},
{
    freezeTableName: true,
    timestamps: false
}, {
    sequelize,
    validate: {
      bothCoordsOrNone() {
        if (this.u_perfil === null){
          throw new Error('No hay perfil!');
        }
      }
    }
   }
)
t_usuarios.removeAttribute('id');
console.log(t_usuarios == sequelize.models.t_usuarios);

module.exports = t_usuarios;

