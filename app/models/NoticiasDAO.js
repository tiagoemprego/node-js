function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback)
{
    this._connection.query('select * from noticias order by data_notici desc', callback);
};

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback)
{
    this._connection.query('select * from noticias where id_noticia ='+ id_noticia.id_noticia, callback);
};

NoticiasDAO.prototype.salvarNoticia = function (noticia,callback)
{
    this._connection.query('insert into noticias set ? ', noticia, callback);
};

NoticiasDAO.prototype.get5ultimasnoticias = function (callback)
{
    this._connection.query('select * from noticias order by data_notici desc limit 5', callback);
};

NoticiasDAO.prototype.updateNoticiaDAO = function (id_noticia_edit, callback)
{
    this._connection.query('select * from noticias where id_noticia ='+ id_noticia_edit.id_noticia, callback);
};

module.exports = function () {
    return NoticiasDAO;
};
