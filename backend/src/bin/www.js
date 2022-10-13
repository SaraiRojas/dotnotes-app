#!/usr/bin/env node

const dotenv = require('dotenv');
const ip = require('ip');
const http = require('http');
const debug = require('debug')('pc24:server');

// ------------------- Module dependencies. -------------------

const app = require('../app');
const logger = require('../util/logger');

// ------------------- Get port from environment and store in Express. -------------------

dotenv.config();
const PORT = normalizePort(process.env.SERVER_PORT || '8080');
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
  const port = parseInt(val, 10);

  if (port.isNaN) {
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
  const addr = server.address();
  const { port } = addr;
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges`);
      // console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`);
      // console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// ------------------- Event listener for HTTP server "listening" event. -------------------

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}
