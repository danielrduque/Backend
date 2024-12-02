export const config = async () => {
  const rawOrigin = process.env.APP_CORS_ORIGIN;
  const rawAllowedHeaders = process.env.APP_CORS_ALLOWED_HEADERS;
  const rawAllowedMethods = process.env.APP_CORS_ALLOWED_METHODS;
  const origin = rawOrigin.split(',');
  const allowedHeaders = rawAllowedHeaders.split(',');
  const allowedMethods = rawAllowedMethods.split(',');

  return {
    app: {
      name: process.env.APP_NAME,
      port: process.env.APP_PORT,
      env: process.env.APP_ENV,
      apiUrl: process.env.APP_API_URL,
      cors: {
        origin,
        allowedHeaders,
        allowedMethods,
      },
    },
    jwt: {
      secret: process.env.JWT_SECRET_KEY,
      expiresIn: process.env.JWT_EXPIRES_IN,
      refreshTokenExpiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
    },
    swagger: {
      user: process.env.SWAGGER_USER,
      password: process.env.SWAGGER_PASSWORD,
    },
    db: {
      type: process.env.DB_TYPE,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT as string),
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
  };
};
