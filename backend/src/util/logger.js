const { createLogger, format, transports } = require('winston');

const log = createLogger({
  transports: [
    new transports.File({
      maxsize: 5120000,
      maxFiles: 5,
      filename: `${__dirname}/../logs/log-api.log`,
      format: format.combine(
        // format.colorize({
        //     // all: true
        // }),
        format.label({
          label: '[winston]',
        }),
        // format.simple(),
        format.timestamp({
          format: 'YY-MM-DD HH:mm:ss',
        }),
        format.printf(
          (info) =>
            `${info.label} [${info.timestamp}] ${info.level}: ${info.message}`,
        ),
      ),
    }),
    new transports.Console({
      level: 'debug',
      format: format.combine(
        format.colorize({
          // all: true
        }),
        // format.label({
        //     label: '[winston]'
        // }),
        // format.simple(),
        format.timestamp({
          format: 'YY-MM-DD HH:mm:ss',
        }),
        format.printf(
          (info) => `[${info.timestamp}] ${info.level}: ${info.message}`,
        ),
      ),
    }),
  ],
});

module.exports = log;
