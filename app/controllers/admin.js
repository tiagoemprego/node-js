module.exports.formulario_inclusao_noticia = function (aplication, req, res) {
    res.render("admin/form_add_noticia", {
        validacao: {},
        noticia: {},
    });
};

module.exports.noticias_salvar = function (aplication, req, res) {
    var noticia = req.body;

    req.assert('titulo','Titulo é obrigatorio!').notEmpty();
    req.assert('resumo','Resumo é obrigatorio!').notEmpty();
    req.assert('resumo','Nome deve conter entre 10 e 100 caracteres!').len(10, 100);
    req.assert('autor','Resumo é obrigatorio!').notEmpty();
    req.assert('data_notici','Data é obrigatorio!').notEmpty();
    req.assert('noticia','Noticia é obrigatorio!').notEmpty();

    var erros =  req.validationErrors();

    if (erros){
        res.render("admin/form_add_noticia", {
            validacao: erros,
            noticia: noticia,
        });
        return
    }

    var connection = aplication.config.dbConnection();
    var noticiaModel = new aplication.app.models.NoticiasDAO(connection);

    //# o getNoticia esta sendo chamado da pasta de model #//
    noticiaModel.salvarNoticia(noticia,function (error, result)
    {
        res.redirect('/noticias');
    });
};

module.exports.update_DAO = function (aplication, req, res) {
    var noticiaUpdate = req.body;
    var getIdNoticia = req.query;

    var connection = aplication.config.dbConnection();
    var noticiaModel = new aplication.app.models.NoticiasDAO(connection);

    console.log("<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>",getIdNoticia);

    noticiaModel.updateDAO(noticiaUpdate, function () {
        res.redirect('/noticia?id_noticia='+getIdNoticia);
    });
};
