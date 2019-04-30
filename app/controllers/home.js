module.exports.index = function (aplication, req, res) {
    var pages = req.query;

    console.log(pages);

    var connection = aplication.config.dbConnection();
    var noticiasModel = new aplication.app.models.NoticiasDAO(connection);

    noticiasModel.get5ultimasnoticias(pages, function (error, result) {
        res.render("home/index", {
            noticias: result
        });
    });
};
