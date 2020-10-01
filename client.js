const {DataTypes} = require('sequelize')
const database = require('./database')

const client = database.define(
    'client',
    {
        id: {type: DataTypes.BIGINT.UNSIGNED, primaryKey: true},
        name: {type: DataTypes.STRING},
        code: {type: DataTypes.STRING},
        logo: {type: DataTypes.STRING},
        plan: {type: DataTypes.INTEGER},
        inserted_at: {type: DataTypes.DATE},
        updated_at: {type: DataTypes.DATE},
        last_start: {type: DataTypes.DATE},
        closed: {type: DataTypes.INTEGER},
        currency: {type: DataTypes.STRING},
        currency_symbol: {type: DataTypes.STRING},
        currency_format: {type: DataTypes.INTEGER},
        pass_admin: {type: DataTypes.STRING},
        play_sound: {type: DataTypes.INTEGER}
    },
)

client.readAll = () => client.findAll({attributes: ['id', 'name']})

module.exports = client
