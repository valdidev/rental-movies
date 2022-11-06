const winston = require('winston');
const { format } = winston;

const appRoot = require('app-root-path');

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'green'
};

winston.addColors(colors);

// console format
const myFormat = format.combine(
    format.colorize({ all: true }),
    format.timestamp(),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
);

// log files format
const myFileFormat = format.combine(
    format.uncolorize(),
    format.timestamp(),
    format.json()
);

const options = {
    infoFile: {
        level: 'info',
        filename: `${appRoot}/logs/infos.log`,
        handleExceptions: true,
        maxsize: 5242880, //5Mb
        maxFiles: 5,
        format: myFileFormat
    },
    warnFile: {
        level: 'warn',
        filename: `${appRoot}/logs/warns.log`,
        handleExceptions: true,
        maxsize: 5242880, //5Mb
        maxFiles: 5,
        format: myFileFormat
    },
    errorFile: {
        level: 'error',
        filename: `${appRoot}/logs/errors.log`,
        handleExceptions: true,
        maxsize: 5242880, //5Mb
        maxFiles: 5,
        format: myFileFormat
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        format: myFormat
    }
};

const logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.infoFile),
        new winston.transports.File(options.warnFile),
        new winston.transports.File(options.errorFile),
        new winston.transports.Console(options.console),
    ],
    exitOnError: false
});

logger.stream = {
    write(message){
        logger.info(message);
    }
};

module.exports = logger;
