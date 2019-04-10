module.exports = function(app)
{
    app.get("/noticias", function (req, res) {
        var mysql = require('mysql');
        var conection = mysql.createConnection({
            host: 'localhost',
            usuario: 'root',
            password: 'cat12345',
            database: 'portal_noticias'
        });

        conection.query('select * from noticias', function (error,result) {
           res.send(result)
        });

        // res.render("noticias/noticias")
    });
};
