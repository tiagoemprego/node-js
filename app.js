var app = require('./config/server');

// #Uso das rotas esta sendo feita com o Cosign #//
// var rotaNoticias = require('./app/routes/noticias')(app);
// var rotaHome = require('./app/routes/home')(app);
// var rotaFormNoticias = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function () {
   console.log("servidor ON!");
});

