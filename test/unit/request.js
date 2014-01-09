var test    = require('tap').test,
    request = require('../../lib/request');

test('request', function (t) {
    // Interface
    t.type(request, 'object', 'module is of expected type');
    t.type(request.basic, 'function', 'property is of expected type');

    // End
    t.end();
    setTimeout(process.exit, 100);
});