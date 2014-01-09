var test    = require('tap').test,
    request = require('../../lib/request');

test('request', function (t) {
    // Setup
    request.headers = {
        'authorization': 'Basic ff'
    };
    
    // Check equality
    t.equal(request.basic().username, '}', 'result is as expected');
    t.equal(request.basic().password, null, 'result is as expected');

    // End
    t.end();
    setTimeout(process.exit, 100);
});