/**
 * Extensions to the HTTP response object.
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
var res = module.exports = {
    __proto__: http.ServerResponse.prototype
};

/**
 * HTTP writer.
 *
 * @param {int} HTTP response code
 * @param {string} Content-type (MIME)
 * @param {string, buffer} HTTP response body
 *
 * @return {void}
 */
res.send = function (code, type, body) {
    if (this.headersSent) return;
    this.writeHead(code, {
        'Content-Type': type,
        'Content-Length': Buffer.byteLength(body)
    });
    this.end(body);
};

/**
 * HTTP redirect abstraction.
 *
 * @param {string} Redirect location
 *
 * @return {void}
 */
res.redirect = function (location) {
    if (this.headersSent) return;
    this.writeHead(301, { 'Location': location });
    this.end();
};

//

/**
 * HTML writer abstraction.
 *
 * @param {int, optional} Response code (default = 200)
 * @param {string} HTML string
 */
res.html = function (code, body) {
    if (typeof body === 'undefined') {
        body = code;
        code = 200;
    }

    this.send(code, 'text/html', body);
};

/**
 * JSON writer abstraction.
 *
 * @param {int, optional} Response code (default = 200)
 * @param {object} Response body to be transformed into a JSON string
 */
res.json = function (code, body) {
    if (typeof body === 'undefined') {
        body = code;
        code = 200;
    }

    this.send(code, 'application/json', JSON.stringify(body));
};
