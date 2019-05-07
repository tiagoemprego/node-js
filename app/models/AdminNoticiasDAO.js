function NoticiasAdminDAO(connection) {
    this._connection = connection;
}

NoticiasAdminDAO.prototype.salvarNoticia = function (noticia,callback)
{
    this._connection.query('insert into noticias set ? ', noticia, callback);
};

//Pre uptade da noticia
NoticiasAdminDAO.prototype.getUpdateNoticiaDAO = function (id_noticia_edit, callback)
{
    this._connection.query('select * from noticias where id_noticia ='+ id_noticia_edit.id_noticia, callback);
};

NoticiasAdminDAO.prototype.updateDAO = async function(noticiaUpdate, callback)
{
    this._connection.query('update noticias set titulo="'+noticiaUpdate.titulo+'",resumo="'+noticiaUpdate.resumo+'",autor="'+noticiaUpdate.autor+'",noticia="'+noticiaUpdate.noticia+'" where id_noticia ='+noticiaUpdate.id, callback);
};

//delete noticia
NoticiasAdminDAO.prototype.deleteDAO = function(id_delete, callback)
{
    this._connection.query('delete from noticias where id_noticia ='+ id_delete.id_noticia, callback);
};


module.exports = function () {
  return NoticiasAdminDAO;
};