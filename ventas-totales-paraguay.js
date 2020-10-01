const {Sequelize, QueryTypes} = require('sequelize')

const database = new Sequelize('digitalwaiterdb', 'admin', 'digitalwaiter2020', {
    host: 'rds-digital-waiter2.coo2snytbquk.us-east-1.rds.amazonaws.com',
    dialect: 'mariadb'
})

let sum = 0

function calculateTotal() {
    return database.query(
        `SELECT c.name, SUM(po.total) as total
             FROM clients c JOIN orders o ON c.id = o.client_id
                            JOIN products_orders po ON o.id = po.order_id
             WHERE c.id in (10, 14, 15, 16, 17, 18, 19, 20)
             GROUP BY c.id`,
        {
            //replacements: {id: []clientId},
            type: QueryTypes.SELECT
        }
    )
}

calculateTotal()
    .then( totals => {console.log(totals)})