/* eslint-disable @typescript-eslint/naming-convention */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_NAME: string;
      APP_SLUG: string;
      APP_LOG_LEVEL: string;
      APP_PORT: number;
      APP_NODE_ENV: 'local' | 'development' | 'production';

      SERVER_TYPE: 'express' | 'restify' | 'fastify';

      POSTGRES_HOST: string;
      POSTGRES_PORT: string;
      POSTGRES_DATABASE: string;
      POSTGRES_USERNAME: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_DATA_LIMIT: string;
    }
    interface Process {
      settings: {
        app: {
          name: string;
          slug: string;
          nodeEnv: 'local' | 'development' | 'production';
          serverType: 'express' | 'restify' | 'fastify';
          logLevel: string;
          port: number;
        };
        db: {
          host: string;
          port: number;
          database: string;
          username: string;
          password: string;
          dataLimit: number;
        };
      };
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
