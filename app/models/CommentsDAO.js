function CommentsDAO(connection)
{
    this._connection = connection;
}

CommentsDAO.prototype.insertComment = function(comment, callback)
{
    this._connection.query('insert into comments set ?', comment, callback);
};

CommentsDAO.prototype.commentsFilter = function(id_comment, callback)
{
    this._connection.query('select c.id_comment, c.autor, c.comentario, c.data_comment, c.comment_id from comments as c join noticias on comment_id = id_noticia where comment_id = '+id_comment.id+' order by data_comment limit 3 offset '+id_comment.page, callback);
};

module.exports = function()
{
  return CommentsDAO;
};
