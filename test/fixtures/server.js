var micron = require('../../index');

var server = micron.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(req.headers, true, 2));
    req.pipe(res);
});

server.use(function (req, res, next) {
    res.setHeader('ISO-Date', new Date().toISOString());
    next();
});

server.listen(8888);