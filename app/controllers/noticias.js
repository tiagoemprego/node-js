module.exports.noticias = function (aplication, req, res) {
    var connection = aplication.config.dbConnection();
    var noticiasModel = new aplication.app.models.NoticiasDAO(connection);

    //# o getNoticias esta sendo chamado da pasta de model #//
    noticiasModel.getNoticias(function (error,result) {
        res.render("noticias/noticias", {noticias: result});
    });
};

module.exports.noticia = function (aplication, req, res) {
    var connection = aplication.config.dbConnection();
    var noticiaModel = new aplication.app.models.NoticiasDAO(connection);

    //# o getNoticia esta sendo chamado da pasta de model #//
    noticiaModel.getNoticia(function (error, result) {
        res.render('noticias/noticia', {noticia: result})
    });
};
