var test        = require('tap').test,
    response    = require('../../lib/response');

test('response', function (t) {
    // Setup
    response.headersSent = false;
    
    response.writeHead = function (code, headers) {
        t.equal(code, 200, 'code is of expected value');
        t.type(headers, 'object', 'headers is of expected type');
        t.equal(headers['Content-Type'], 'application/json', 'expected type');
        t.equal(headers['Content-Length'], 13, 'expected content length');
    };

    response.end = function (body) {
        t.type(body, 'string', 'body is of expected type');
        t.equal(body, '{"foo":"bar"}', 'body is of expected value');
        t.end();
    };
    
    // Exec
    response.json({
        foo: 'bar'
    });
});