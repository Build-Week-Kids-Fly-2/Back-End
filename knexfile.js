// Update with your config settings.
const knexCleaner = require('knex-cleaner');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/kidsfly.db3' // << creates a db3 file for me
    },
    useNullAsDefault: true, // << prevents crashes when working with sqlite3.
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds'
    },
    pool: {
      afterCreate: (connection, done) => {
        connection.run('PRAGMA foreign_keys = ON', done)
      },
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // needed for heroku
  production: {
    client: 'pg', // < heroku postgreS
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds', 
    }
  }

};
