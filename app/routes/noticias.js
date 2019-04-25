module.exports = function(app)
{
    //# para ficar mas fácil de identificar o uso da pasta app e a variável app #//
    var aplication = app;

    app.get("/noticias", function (req, res)
    {

        var connection = aplication.config.dbConnection();
        var noticiasModel = new aplication.app.models.NoticiasDAO(connection);

        //# o getNoticias esta sendo chamado da pasta de model #//
        noticiasModel.getNoticias(function (error,result) {
            res.render("noticias/noticias", {noticias: result});
        });
    });
};
