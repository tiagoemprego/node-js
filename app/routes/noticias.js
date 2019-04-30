module.exports = function(aplication)
{
    aplication.get("/noticias", function (req, res)
    {
        aplication.app.controllers.noticias.noticias(aplication, req, res)
    });

    aplication.get('/noticia', function (req, res)
    {
        aplication.app.controllers.noticias.noticia(aplication, req, res)
    });

    //rota para paginação da pagin de noticias
    aplication.get('/noticias/load', function (req, res)
    {
        aplication.app.controllers.noticias.insertNoticias(aplication, req, res);
    })
};
