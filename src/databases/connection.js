var knex = require('knex')({
    client: 'mysql',

    connection: {
        host : 'xlf3ljx3beaucz9x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user : 'ezbnjw1aqcdla55w',
        password : 'mhh7z31u6dn7o0oh',
        database : 'wa0dzvw2zzqa2wdc'
     }
});

module.exports = knex