var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias');

rotaNoticias();





app.listen(3000, function () {
   console.log("servidor ON!");
});

