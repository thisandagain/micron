/**
 * Micron - Minimalist extensions to the Node.js HTTP server.
 *
 * @package micron 
 * @author Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */
var http    = require('http');

var Server  = require('./lib/server');

/**
 * Export & extend HTTP
 */
var micron = module.exports = http;

/**
 * Override for the HTTP "createServer" method.
 *
 * @param {function} Request listener
 *
 * @return {void}
 */
micron.createServer = function (requestListener) {
    return new Server(requestListener);
};