module.exports = function(aplication)
{
    aplication.get("/formulario_inclusao_noticia", function (req, res)
    {
        aplication.app.controllers.admin.formulario_inclusao_noticia(aplication, req, res);
    });

    aplication.post('/noticias/salvar', function (req, res)
    {
        aplication.app.controllers.admin.noticias_salvar(aplication, req, res);
    });

    //alterar noticia
    aplication.get('/alterar-noticia', function (req, res)
    {
        aplication.app.controllers.noticias.alterarNoticia(aplication, req, res)
    });

    aplication.post('/alterar-noticia/update', function (req, res)
    {
        aplication.app.controllers.admin.update_DAO(aplication, req, res);
    });

    // delete noticias
    aplication.post('/delete/noticia', function (req, res)
    {
        aplication.app.controllers.admin.delete_noticia(aplication, req, res);
    });
};
