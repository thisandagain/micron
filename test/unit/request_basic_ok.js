var test    = require('tap').test,
    request = require('../../lib/request');

test('request', function (t) {
    // Setup
    request.headers = {
        'authorization': 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
    };
    
    // Check equality
    t.equal(request.basic().username, 'username', 'result is as expected');
    t.equal(request.basic().password, 'password', 'result is as expected');

    // End
    t.end();
    setTimeout(process.exit, 100);
});