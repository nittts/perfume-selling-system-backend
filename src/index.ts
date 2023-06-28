import LoggerService from "./utils/logger";
import app from "./app";

const logger = new LoggerService("App");

const port = process.env.PORT || 8888;
const host = process.env.HOST || "localhost";

const server = app.listen(port, () => {
  logger.info(`Server running on http://${host}:${port}!`);
});
