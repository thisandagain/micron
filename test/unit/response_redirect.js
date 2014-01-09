var test        = require('tap').test,
    response    = require('../../lib/response');

test('response', function (t) {
    // Setup
    response.headersSent = false;
    
    response.writeHead = function (code, headers) {
        t.equal(code, 301, 'code is of expected value');
        t.type(headers, 'object', 'headers is of expected type');
        t.equal(headers['Location'], 'https://github.com', 'expected location');
    };

    response.end = function (body) {
        t.type(body, 'undefined', 'body is of expected type');
        t.end();
    };
    
    // Exec
    response.redirect('https://github.com');
});