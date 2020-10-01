const database = require('./database');
const { QueryTypes } = require('sequelize');

async function run(){
    const clients = await database.query("SELECT id, name FROM clients", { type: QueryTypes.SELECT })
    console.log('paso',clients )
    if(clients){
        const products = await database.query("SELECT total FROM products_orders", { type: QueryTypes.SELECT })
        /*console.log('clientes', clients)/!**!/*/
        console.log('products', products)
    }
}

run()