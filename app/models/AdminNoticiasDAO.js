function NoticiasAdminDAO(connection) {
    this._connection = connection;
}

//Apresenta as notícias na pagina de /noticias
NoticiasAdminDAO.prototype.getNoticiasAdmin = function (callback)
{
    this._connection.query('select * from noticias order by data_notici', callback);
};

//Salva a noticia cadastrada no admin
NoticiasAdminDAO.prototype.salvarNoticia = function (noticia,callback)
{
    this._connection.query('insert into noticias set ? ', noticia, callback);
};

//Seleciona a noticias para a atualização 
NoticiasAdminDAO.prototype.getUpdateNoticiaDAO = function (id_noticia_edit, callback)
{
    this._connection.query('select * from noticias where id_noticia ='+ id_noticia_edit.id_noticia, callback);
};

//Atualiza a noticia
NoticiasAdminDAO.prototype.updateDAO = async function(noticiaUpdate, callback)
{
    this._connection.query('update noticias set titulo="'+noticiaUpdate.titulo+'",resumo="'+noticiaUpdate.resumo+'",autor="'+noticiaUpdate.autor+'",noticia="'+noticiaUpdate.noticia+'" where id_noticia ='+noticiaUpdate.id, callback);
};

//Deleta a noticias selecionada
NoticiasAdminDAO.prototype.deleteDAO = function(id_delete, callback)
{
    this._connection.query('delete from noticias where id_noticia ='+ id_delete.id_noticia, callback);
};


module.exports = function () {
  return NoticiasAdminDAO;
};