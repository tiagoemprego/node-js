function CommentsDAO(connection)
{
    this._connection = connection;
}

//Insere o comentário na sua respectiva notícia
CommentsDAO.prototype.insertComment = function(comment, callback)
{
    this._connection.query('insert into comments set ?', comment, callback);
};

//Filtro dos comentario de acordo com suas respectivas noticias (tabela relacionada)
CommentsDAO.prototype.commentsFilter = function(id_comment, callback)
{
    this._connection.query('select c.id_comment, c.autor, c.comentario,c.publicar, c.data_comment, c.comment_id from comments as c join noticias on comment_id = id_noticia where comment_id = '+id_comment.id+' order by data_comment limit 2 offset '+id_comment.page, callback);
};

//todas as noticias devem aparecer no admin pra ser liberada pelo admin
CommentsDAO.prototype.publicComment = function(id_comment, callback)
{
    this._connection.query('update comments set publicar="false" where id_comment='+id_comment, callback);
};

module.exports = function()
{
  return CommentsDAO;
};
