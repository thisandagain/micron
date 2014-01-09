var micron = require('../../index');

// Create the server and define the request listener
var server = micron.createServer(function (req, res) {
    res.json(req.headers);
});

// Add some middleware
server.use(function (req, res, next) {
    req.headers['x-server'] = 'Hello from micron';
    next();
});

server.listen(8889);