var http = require('http'),
  $z = require('zest-server');

$z.setConfig({
  //requirejs config can go here:
  require: {
  }
}, function() {
  http.createServer(function(req, res) {
    if (req.url == '/') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      $z.render('cs!app/hello-world', {}, res);
    }
    else
      $z.serveResources(req, res);
  }).listen(8080);

});
