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
    });



    //Sections comments
    aplication.post('/noticias/comments', function (req, res)
    {
        aplication.app.controllers.noticias.salvarComentario(aplication, req, res);
    });


    // EX: /comments/filter/?id=2&page=1
    aplication.get('/comments/filter', function (req, res)
    {
        aplication.app.controllers.noticias.getComments(aplication, req, res);
    });
};
