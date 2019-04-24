module.exports = function (app)
{
    //# para ficar mas fácil de identificar o uso da pasta app e a variável app #//
    var aplication = app;

    app.get('/noticia', function (req, res)
    {

        var connection = aplication.config.dbConnection();
        var noticiaModel = aplication.app.models.noticiasModel;

        noticiaModel.getNoticia(connection,function (error, result) {
            res.render('noticias/noticia', {noticia: result})
        });
    });
};