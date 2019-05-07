function NoticiasDAO(connection){
    this._connection = connection;
}

//Apresenta as notícias na pagina de /noticias
NoticiasDAO.prototype.getNoticias = function (callback)
{
    this._connection.query('select * from noticias order by data_notici desc limit 3', callback);
};

//apresenta a notícia selecionada /noticia?id_noticia=?
NoticiasDAO.prototype.getNoticia = function (id_noticia, callback)
{
    this._connection.query('select * from noticias where id_noticia ='+ id_noticia.id_noticia, callback);
};

//apresenta as 5 primeiras nortícias na pagina inicial
NoticiasDAO.prototype.noticiasHome = function (callback)
{
    this._connection.query('select * from noticias order by data_notici desc limit 5', callback);
};

//load de mais noticias via ajax
NoticiasDAO.prototype.loadNoticias = function(page, callbak)
{
    this._connection.query('select * from noticias order by id_noticia limit 3 offset '+ page.page, callbak);
};

module.exports = function()
{
    return NoticiasDAO;
};
