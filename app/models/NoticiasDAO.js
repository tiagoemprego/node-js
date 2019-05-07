function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback)
{
    this._connection.query('select * from noticias order by data_notici desc limit 3', callback);
};

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback)
{
    this._connection.query('select * from noticias where id_noticia ='+ id_noticia.id_noticia, callback);
};


//apagar
NoticiasDAO.prototype.salvarNoticia = function (noticia,callback)
{
    this._connection.query('insert into noticias set ? ', noticia, callback);
};

NoticiasDAO.prototype.get5ultimasnoticias = function (callback)
{
    this._connection.query('select * from noticias order by data_notici desc limit 5', callback);
};

//load de mais noticias via ajax
NoticiasDAO.prototype.loadNoticias = function(page, callbak)
{
    this._connection.query('select * from noticias order by id_noticia limit 3 offset '+ page.page, callbak);
};

//apagar
//Pre uptade da noticia
NoticiasDAO.prototype.getUpdateNoticiaDAO = function (id_noticia_edit, callback)
{
    this._connection.query('select * from noticias where id_noticia ='+ id_noticia_edit.id_noticia, callback);
};

//apagar
NoticiasDAO.prototype.updateDAO = async function(noticiaUpdate, callback)
{
    this._connection.query('update noticias set titulo="'+noticiaUpdate.titulo+'",resumo="'+noticiaUpdate.resumo+'",autor="'+noticiaUpdate.autor+'",noticia="'+noticiaUpdate.noticia+'" where id_noticia ='+noticiaUpdate.id, callback);
};

//apagar
//delete noticia
NoticiasDAO.prototype.deleteDAO = function(id_delete, callback)
{
    this._connection.query('delete from noticias where id_noticia ='+ id_delete.id_noticia, callback);
};

module.exports = function()
{
    return NoticiasDAO;
};
