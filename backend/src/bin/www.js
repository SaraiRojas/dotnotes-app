#!/usr/bin/env node

const dotenv = require( 'dotenv');
const ip = require('ip');
const logger = require('../util/logger');

// ------------------- Module dependencies. -------------------

const app = require('../app');
const debug = require('debug')('pc24:server');
const http = require('http');

// ------------------- Get port from environment and store in Express. -------------------

dotenv.config();
const PORT = normalizePort( process.env.SERVER_PORT || '8080' );
app.set('port', PORT);

// ------------------- Create HTTP server. -------------------

const server = http.createServer(app);

// ------------------- Listen on provided port, on all network interfaces. -------------------

server.listen(PORT, () => {
  logger.info(`Server running on: ${ip.address()}:${PORT}.`);
  logger.info(`You can open http://localhost:${PORT} in your browser.`);
});
server.on('error', onError);
server.on('listening', onListening);

// ------------------- Normalize a port into a number, string, or false. -------------------

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

// ------------------- Event listener for HTTP server "error" event. -------------------


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// ------------------- Event listener for HTTP server "listening" event. -------------------

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
