const {Sequelize, DataTypes} = require('sequelize');
//const { UPSERT } = require('sequelize/types/lib/query-types');

//const sequelize = new Sequelize('postgres::memory')
const sequelize = new Sequelize('postgres://postgres:RH23021312@ec2-54-212-132-145.us-west-2.compute.amazonaws.com:5432/sirhcobnomina')

const t_rhnominas = sequelize.define('t_rhnominas', {
    quincenapago: {type: DataTypes.INTEGER, allowNull: false },
    numemp: {type: DataTypes.STRING, allowNull: false },
    nombreempleado: {type: DataTypes.STRING, allowNull: false },
    fchingcobaev: {type: DataTypes.STRING, allowNull: false },
    antiguedad: {type: DataTypes.STRING, allowNull: false },
    clavecategoria: {type: DataTypes.STRING, allowNull: false },
    desccategoria: {type: DataTypes.STRING, allowNull: false },
    claveplantel: {type: DataTypes.STRING, allowNull: false },
    descplantel: {type: DataTypes.STRING, allowNull: false },
    clavect: {type: DataTypes.STRING, allowNull: false },
    nombrect: {type: DataTypes.STRING, allowNull: false },
    idqnavigini: {type: DataTypes.INTEGER, allowNull: false },
    idqnavigfin: {type: DataTypes.INTEGER, allowNull: false },
    qnainicio: {type: DataTypes.STRING, allowNull: false },
    qnafin: {type: DataTypes.STRING, allowNull: false },
    idesquemapago: {type: DataTypes.INTEGER, allowNull: false },
    esquemapago: {type: DataTypes.STRING, allowNull: false },
    permensualneto: {type: DataTypes.DOUBLE, allowNull: false },
    dedmensualneto: {type: DataTypes.DOUBLE, allowNull: false },
    totmensualneto: {type: DataTypes.DOUBLE, allowNull: false },
    compensacion: {type: DataTypes.DOUBLE, allowNull: false },
    percquinbruto: {type: DataTypes.DOUBLE, allowNull: false },
    deduquinbruto: {type: DataTypes.DOUBLE, allowNull: false },
    totquinbruto: {type: DataTypes.DOUBLE, allowNull: false },
    totmenbruto: {type: DataTypes.DOUBLE, allowNull: false },
    idsindicato: {type: DataTypes.INTEGER, allowNull: false },
    siglassindicato: {type: DataTypes.STRING, allowNull: false },
    idtipoemp: {type: DataTypes.INTEGER, allowNull: false },
    tipoempleado: {type: DataTypes.STRING, allowNull: false },
    idempfuncion: {type: DataTypes.INTEGER, allowNull: false },
    empfuncion: {type: DataTypes.STRING, allowNull: false },
    idfuncionpri: {type: DataTypes.INTEGER, allowNull: false },
    funcionpri: {type: DataTypes.STRING, allowNull: false },
    idfuncionsec: {type: DataTypes.INTEGER, allowNull: false },
    funcionsec: {type: DataTypes.STRING, allowNull: false },
    clavemotgralbaja: {type: DataTypes.STRING, allowNull: false },
    desmotgralbaja: {type: DataTypes.STRING, allowNull: false },
    interinopuro: {type: DataTypes.INTEGER, allowNull: false },
    orden: {type: DataTypes.INTEGER, allowNull: false },
    verificado: {type: DataTypes.INTEGER, allowNull: false },
    observaciones: {type: DataTypes.STRING, allowNull: false },
},
{
    freezeTableName: true,
    timestamps: false
})
t_rhnominas.removeAttribute('id');
console.log(t_rhnominas == sequelize.models.t_rhnominas);

module.exports = t_rhnominas;

