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


//alterar, atualizar noticia
module.exports.update_DAO = function (aplication, req, res) {
    var noticiaUpdate = req.body;

    var connection = aplication.config.dbConnection();
    var noticiaModel = new aplication.app.models.AdminNoticiasDAO(connection);

    noticiaModel.updateDAO(noticiaUpdate, function () {
        // res.redirect('/noticia?id_noticia='+noticiaUpdate.id);
        res.redirect('/admin');
    });
};

// excluir noticia
module.exports.delete_noticia = function (aplication, req, res)
{
    var id_delete = req.query;
    var connection = aplication.config.dbConnection();
    var noticiaModel = new aplication.app.models.AdminNoticiasDAO(connection);

    noticiaModel.deleteDAO(id_delete, function () {
        res.redirect('/admin');
    })
};

module.exports.listNoticiaAdmin = function (aplication, req, res)
{
    var connection = aplication.config.dbConnection();
    var noticiaModel = new aplication.app.models.AdminNoticiasDAO(connection);

    noticiaModel.getNoticiasAdmin( function (error, result) {
        res.render('admin/config_noticias', {noticias: result});
    });
};
