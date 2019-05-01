module.exports.noticias = function (aplication, req, res)
{
    var connection = aplication.config.dbConnection();
    var noticiasModel = new aplication.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function (error,result)
    {
        res.render("noticias/noticias", {noticias: result});
    });
};

module.exports.noticia = function (aplication, req, res)
{
    var connection = aplication.config.dbConnection();
    var noticiaModel = new aplication.app.models.NoticiasDAO(connection);

    //# get id_noticia da url e passando por parametro para o getNoticia(NoticiasDAO)
    var id_noticia = req.query;

    //# o getNoticia esta sendo chamado da pasta de model #//
    noticiaModel.getNoticia(id_noticia, function (error, result)
    {
        res.render('noticias/noticia', {noticia: result})
    });
};

module.exports.alterarNoticia = function (aplication, req, res)
{
    var connection = aplication.config.dbConnection();
    var noticiaModel = new aplication.app.models.NoticiasDAO(connection);

    var  id_noticia_edit = req.query;

    noticiaModel.getUpdateNoticiaDAO(id_noticia_edit, function (error, result)
    {
        res.render('admin/form_alter_noticia', {
            noticia: result,
            validacao: {}
        })
    })
};

module.exports.insertNoticias = function (aplication, req, res)
{
    const  page = req.query;

    var connection = aplication.config.dbConnection();
    var noticiaModel = new aplication.app.models.NoticiasDAO(connection);

    noticiaModel.loadNoticias(page, function (error, result)
    {
        res.send(result);
    })
};


//section comments
module.exports.salvarComentario = function (aplication, req, res)
{
    var comment = req.body;

    var connection = aplication.config.dbConnection();
    var commentModel = new aplication.app.models.CommentsDAO(connection);

    commentModel.insertComment(comment, function (error, result)
    {
        res.redirect('/noticia?id_noticia='+comment.comment_id);
    })
};
