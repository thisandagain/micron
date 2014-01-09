/**
 * Minimalist extensions to the Node.js HTTP server.
 *
 * @package micron
 * @author Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */
var _           = require('lodash'),
    http        = require('http'),
    util        = require('util');

var request     = require('./request'),
    response    = require('./response');

/**
 * Constructor
 */
function Server (requestListener) {
    var me = this;

    // Private extensions to the Server instance
    this._requestListener = requestListener;
    this._middleware = [];

    // HTTP negotiation (see core)
    this.httpAllowHalfOpen = false;
    this.timeout = 2 * 60 * 1000;

    // Default event listeners
    this.addListener('connection', http._connectionListener);
    this.addListener('clientError', function (err, conn) {
        conn.destroy(err);
    });

    // Request listener
    this.addListener('request', function (req, res) {
        // Extend req and res
        _.extend(req, request);
        _.extend(res, response);

        // Interate over middleware & apply request listener
        me.series(req, res, me._middleware, function (err) {
            if (err) return me.emit('error', err);
            requestListener(req, res);
        });
    });
}

/**
 * Inherit from core
 */
util.inherits(Server, http.Server);

/**
 * Naive implementation of series iterator for use with the middleware array.
 *
 * @param {array} Array of middleware functions
 *
 * @return {error}
 */
Server.prototype.series = function (req, res, series, callback) {
    // Index (state)
    var i = 0;

    // Iterator
    var iterate = function () {
        if (series.length === 0) return callback(null);

        series[i](req, res, function (err) {
            if (err) return callback(err);
            
            i++;
            if (i >= series.length) return callback(null);
            iterate();
        });
    };

    // Execute
    iterate();
};

/**
 * Registers a new middleware handler (req, res, next) with the server instance.
 *
 * @param {function} Middleware function
 *
 * @return {void}
 */
Server.prototype.use = function (middleware) {
    this._middleware.push(middleware);
};

/**
 * Export
 */
module.exports = Server;