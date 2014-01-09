/**
 * Extensions to the HTTP request object.
 *
 * @package micron
 * @author Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */
var http = require('http');

/**
 * Export
 */
var req = module.exports = {
    __proto__: http.IncomingMessage.prototype
};

/**
 * Returns a username and password from HTTP basic auth headers if provided.
 *
 * @return {object}
 */
req.basic = function () {
    if (typeof this.headers === 'undefined') return null;
    if (typeof this.headers.authorization === 'undefined') return null;

    var header  = this.headers.authorization;
    var token   = header.split(/\s+/).pop();
    var auth    = new Buffer(token, 'base64').toString();
    var parts   = auth.split(/:/);

    return {
        username: parts[0] || null,
        password: parts[1] || null
    };
};