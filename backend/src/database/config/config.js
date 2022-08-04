const dotenv = require('dotenv');

dotenv.config();
const conf = {
  "dev": {
    "host": `${process.env.DB_HOST}`,
    "port": `${process.env.DB_PORT}`,
    "username": `${process.env.DB_USER}`,
    "password": `${process.env.DB_PASSWORD}`,
    "database": `${process.env.DB_NAME}`,
    "dialect": "mysql",
    "operatorsAliases" : "false",
    "pool": {
      "maxConnections": `${process.env.DB_CONNECTION_LIMIT}`
    }
  },
  // "development": {
  //   "username": "gsus",
  //   "password": "password",
  //   "database": "dotenotes_db",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql",
  //   "operatorsAliases" : "false"
  // },
  "test": {
    "host": `${process.env.DB_HOST}`,
    "port": `${process.env.DB_PORT}`,
    "username": `${process.env.DB_USER}`,
    "password": `${process.env.DB_PASSWORD}`,
    "database": `${process.env.DB_NAME}`,
    "dialect": "mysql",
    "operatorsAliases" : "false",
    "pool": {
      "maxConnections": `${process.env.DB_CONNECTION_LIMIT}`
    }
  },
  "prod": {
    "host": `${process.env.DB_HOST}`,
    "port": `${process.env.DB_PORT}`,
    "username": `${process.env.DB_USER}`,
    "password": `${process.env.DB_PASSWORD}`,
    "database": `${process.env.DB_NAME}`,
    "dialect": "mysql",
    "operatorsAliases" : "false",
    "pool": {
      "maxConnections": `${process.env.DB_CONNECTION_LIMIT}`
    }
  }
};

module.exports = conf;