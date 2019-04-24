module.exports = function(app)
{
    //# para ficar mas fácil de identificar o uso da pasta app e a variável app #//
    var aplication = app;

    app.get("/noticias", function (req, res)
    {

        var connection = aplication.config.dbConnection();
        var noticiasModel = aplication.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function (error,result) {
            res.render("noticias/noticias", {noticias: result});
        });
    });
};
