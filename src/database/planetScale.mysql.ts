import { Sequelize } from 'sequelize';
import { AppError } from '../middlewares/asyncErrors.middleware';

const db = process.env.PLANETSCALE_DATABASE || '';
const user = process.env.PLANETSCALE_USERNAME || '';
const pwd = process.env.PLANETSCALE_PASSWORD || '';
const host = process.env.PLANETSCALE_HOST || '';
const pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000,
};

const PlanetScaleSQL = new Sequelize(db, user, pwd, {
  ssl: true,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    },
  },
  host: host,
  pool,
});

const checkConnection = async () => {
  try {
    await PlanetScaleSQL.authenticate();
    console.info(
      'Connection to Planet Scale Database was estabilished Successfuly!',
    );
  } catch (error) {
    console.error(
      'Unable to connect to the Planet Scale Database, ERROR:',
      error,
    );
    throw new AppError('PlanetScale Connection Error', 503);
  }
};

export { checkConnection, PlanetScaleSQL };
