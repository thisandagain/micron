var test    = require('tap').test,
    Server  = require('../../lib/server');

test('server', function (t) {
    // Interface
    t.type(Server, 'function', 'module is of expected type');

    // Instance
    var server = new Server(function (req, res) {});
    t.type(server, 'object', 'instance is of expected type');
    t.type(server._requestListener, 'function', 'property is of expected type');
    t.type(server._middleware, 'object', 'property is of expected type');
    t.type(server._events, 'object', 'property is of expected type');

    t.type(server.use, 'function', 'property is of expected type');
    t.type(server.series, 'function', 'property is of expected type');
    t.type(server.listen, 'function', 'property is of expected type');

    // End
    t.end();
    setTimeout(process.exit, 100);
});