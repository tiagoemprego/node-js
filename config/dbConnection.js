
var mysql = require('mysql');

var connMysql = function(){
    return mysql.createConnection({
        host: '192.168.10.10',
        user: 'homestead',
        password: 'secret',
        database: 'portal_noticias'
    });
};

module.exports = function () {
    return connMysql;
};
