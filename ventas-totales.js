const {Sequelize, QueryTypes} = require('sequelize')

const database = new Sequelize('digitalwaiterdb', 'admin', 'digitalwaiter2020', {
    host: 'rds-digital-waiter2.coo2snytbquk.us-east-1.rds.amazonaws.com',
    dialect: 'mariadb'
})

const clientId = 20
let sum = 0

function getOrders() {
    return database.query(
        'SELECT id FROM orders WHERE client_id = :client_id ',
        {
            replacements: {client_id: clientId},
            type: QueryTypes.SELECT
        }
    )
}

function getTotalForOrders(order) {
    return database.query(
        'SELECT sum(total) as total FROM products_orders WHERE order_id = :order_id AND total IS NOT NULL',
        {
            replacements: {order_id: order},
            type: QueryTypes.SELECT
        }
    )
}


getOrders()
    .then(orders => orders.forEach(order => getTotalForOrders(order.id)
        .then(totalForOrder => {
            let {total} = totalForOrder[0]
            sum += total
        })
        .then(() => console.log(sum))
    ))






