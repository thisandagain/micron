var test    = require('tap').test,
    request = require('../../lib/request');

test('request', function (t) {
    // Check equality
    t.equal(request.basic(), null, 'result is as expected');

    // End
    t.end();
    setTimeout(process.exit, 100);
});