var test        = require('tap').test,
    response    = require('../../lib/response');

test('response', function (t) {
    // Setup
    response.headersSent = true;
        
    // Exec
    response.send(200, 'text/plain', 'hello world');

    t.end();
});