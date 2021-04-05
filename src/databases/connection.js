var knex = require('knex')({
    client: 'mysql',

    connection: {
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'pucmgpoc'
     }
});

module.exports = knex