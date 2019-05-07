module.exports.index = function (aplication, req, res) {

    var connection = aplication.config.dbConnection();
    var noticiasModel = new aplication.app.models.NoticiasDAO(connection);

    noticiasModel.noticiasHome( function (error, result) {
        res.render("home/index", {
            noticias: result
        });
    });
};
