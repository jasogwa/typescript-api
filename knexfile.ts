import path from 'path';

// Update with your config settings.
require('dotenv').config();

module.exports = {
    test: {
      client: 'pg',
      connection: {
        database: 'postgres',
        user:     'postgres',
        password: 'postgres'
      },
      migrations: {
        directory: __dirname + '/src/database/migrations'
      },
      seeds: {
        directory: __dirname + '/src/database/seeds/test'
      }
    },
    development: {
      client: 'pg',
      connection: {
        database: 'postgres',
        user:     'postgres',
        password: 'postgres'
      },
      migrations: {
        directory: __dirname + '/src/database/migrations'
      },
      seeds: {
        directory: __dirname + '/src/database/seeds/development'
      }
    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: __dirname + '/src/database/migrations'
      },
      seeds: {
        directory: __dirname + '/src/database/seeds/production'
      }
    }
  };