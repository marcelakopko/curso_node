var http = require('http');

var server = http.createServer( function(req, res) {
  var categoria = req.url
  if (categoria == 'tecnologia') {
    res.end("<html><body>Notícias de tecnologia</body></html>");
  } else if (categoria == 'moda') {
    res.end("<html><body>Notícias de moda</body></html>");
  } else if (categoria == 'beleza') {
    res.end("<html><body>Notícias de beleza</body></html>");
  } else {
    res.end("<html><body>Portal de notícias " + categoria + "</body></html>");
  }
});

server.listen(3300);
