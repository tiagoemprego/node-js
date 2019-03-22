var http = require('http');

var server = http.createServer( function (req, res) {

    var categoria = req.url;

    if (categoria == '/tecnologia'){
        res.end("<html><body>Noticias de tecnologia</html></body>")
    }else if (categoria == '/moda'){
        res.end("<html><body>Noticias de Moda</html></body>")
    }else if (categoria == '/beleza'){
        res.end("<html><body>Noticias de beleza</html></body>")
    }else{
        res.end("<html><body>Noticias de noticias</html></body>")
    }
});

server.listen(3000);
