function CommentsDAO(connection){
    this._connection = connection;
}

CommentsDAO.prototype.insertComment = function(comment, callback)
{
    console.log(comment);
    this._connection.query('insert into comments set ?', comment, callback);
};

CommentsDAO.prototype.commentsFilter = function(id, callback)
{
    this._connection.query('select c.autor, c.comentario, c.data_comment from comments as c join noticias as n on comment_id = id_noticia', callback);
};

module.exports = function()
{
  return CommentsDAO;
};
