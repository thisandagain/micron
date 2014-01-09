var test        = require('tap').test,
    response    = require('../../lib/response');

test('response', function (t) {
    // Interface
    t.type(response, 'object', 'module is of expected type');
    t.type(response.send, 'function', 'property is of expected type');
    t.type(response.redirect, 'function', 'property is of expected type');
    t.type(response.json, 'function', 'property is of expected type');
    t.type(response.html, 'function', 'property is of expected type');

    // End
    t.end();
    setTimeout(process.exit, 100);
});