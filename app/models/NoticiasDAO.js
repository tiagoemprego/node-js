function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback)
{
    this._connection.query('select * from noticias order by data_notici', callback);
};

NoticiasDAO.prototype.getNoticia = function (callback)
{
    this._connection.query('select * from noticias where id_noticia = 5', callback);
};

NoticiasDAO.prototype.salvarNoticia = function (noticia,callback)
{
    this._connection.query('insert into noticias set ? ', noticia, callback);
};

NoticiasDAO.prototype.get5ultimasnoticias = function (callback)
{
    this._connection.query('select * from noticias order by data_notici desc limit 5', callback);
};

module.exports = function () {
    return NoticiasDAO;
};
