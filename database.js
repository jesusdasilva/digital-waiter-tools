const {Sequelize} = require('sequelize')

const database = new Sequelize('digitalwaiterdb', 'admin', 'digitalwaiter2020', {
    host: 'rds-digital-waiter2.coo2snytbquk.us-east-1.rds.amazonaws.com',
    dialect: 'mariadb'
})

module.exports = database




