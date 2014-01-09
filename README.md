## micron
#### Minimalist extensions to the Node.js core HTTP server.

Micron is a *tiny* module which provides a few simple extensions to the [Node.js core HTTP API](http://nodejs.org/api/http.html). Most notably, Micron provides an un-buffered middleware pattern modeled after the `function (req, res, next)` convention and basic extensions to the request and response objects.

The goal of Micron is to provide as thin a layer as possible on top of the core HTTP API as to reduce boilerplate for many applications, but without adding bloat or destroying desirable features such as streams as in the case of Connect / Express.

### Installation
```bash
npm install micron
```

### Getting Started
```js
var micron = require('micron');

// Create the server and define the request listener
var server = micron.createServer(function (req, res) {
    res.json(req.headers);
});

// Add some middleware
server.use(function (req, res, next) {
    req.headers['x-server'] = 'Hello from micron';
    next();
});

// Start listening for requests
server.listen(8080);
```