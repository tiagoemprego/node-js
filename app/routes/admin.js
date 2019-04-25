module.exports = function(app)
{
    var aplication = app;
    app.get("/formulario_inclusao_noticia", function (req, res)
    {
        res.render("admin/form_add_noticia");
    });

    app.post('/noticias/salvar', function (req, res)
    {
        var noticia = req.body;

        var connection = aplication.config.dbConnection();
        var noticiaModel = new aplication.app.models.NoticiasDAO(connection);

        //# o getNoticia esta sendo chamado da pasta de model #//
        noticiaModel.salvarNoticia(noticia,function (error, result)
        {
            res.redirect('/noticias');
        });

    });
};
