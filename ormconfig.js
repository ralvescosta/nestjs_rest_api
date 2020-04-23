module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'estudos',
  synchronize: false,
  dropSchema: false,
  logging: false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migration/**/*.js'],
  subscribers: ['dist/subscriber/**/*.js'],
  cli: {
    entitiesDir: 'src/**/*.entity.js',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
