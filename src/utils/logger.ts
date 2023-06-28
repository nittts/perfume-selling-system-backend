import winston from "winston";

const dateFormat = () => {
  return new Date(Date.now()).toUTCString();
};

class LoggerService {
  logger: winston.Logger;
  log_data: string | null;
  route: unknown;

  constructor(route: unknown) {
    this.log_data = null;
    this.route = route;

    const logger = winston.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
        }),
        new winston.transports.File({ filename: `./logs/${route}.log` }),
      ],
      format: winston.format.printf((info) => {
        let message = `${dateFormat()} | ${info.level.toUpperCase()} | ${route}.log | ${info.message} | `;

        message = info.obj ? message + `data:${JSON.stringify(info.obj)} | ` : message;
        message = this.log_data ? message + `log_data:${JSON.stringify(this.log_data)} | ` : message;

        return message;
      }),
    });
    this.logger = logger;
  }

  setLogData(log_data: string) {
    this.log_data = log_data;
  }

  async info(message: string) {
    this.logger.log("info", message);
  }
  async infoObj(message: string, obj?: Object) {
    this.logger.log("info", message, { obj });
  }

  async debug(message: string) {
    this.logger.log("debug", message);
  }
  async debugObj(message: string, obj?: Object) {
    this.logger.log("debug", message, { obj });
  }

  async error(message: string) {
    this.logger.log("error", message);
  }
  async errorObj(message: string, obj?: Object) {
    this.logger.log("error", message, { obj });
  }
}

export default LoggerService;
