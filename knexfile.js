// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      
      database: 'sunSurfer'
    },
    
    pool: {
      min: 1,
      max: 1
    },
    debug: true,
    // migrations: {
    //     directory: './migrations'
    // }
  
  },


  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 1,
      max: 2
    },

    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
