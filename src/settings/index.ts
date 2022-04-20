const {
  APP_NAME,
  APP_SLUG,
  APP_NODE_ENV,
  APP_LOG_LEVEL,
  APP_PORT,
  SERVER_TYPE,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DATABASE,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_DATA_LIMIT,
} = process.env;

process.settings = {
  app: {
    name: APP_NAME,
    slug: APP_SLUG,
    nodeEnv: APP_NODE_ENV,
    serverType: SERVER_TYPE || 'express',
    logLevel: APP_LOG_LEVEL,
    port: APP_PORT,
  },
  db: {
    host: POSTGRES_HOST,
    port: +POSTGRES_PORT,
    database: POSTGRES_DATABASE,
    username: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    dataLimit: +(POSTGRES_DATA_LIMIT || 1),
  },
};
