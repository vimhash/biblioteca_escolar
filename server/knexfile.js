module.exports = {
  development: {
    client: process.env.CLIENT_DB || "pg",
    connection: {
      host: process.env.HOST_DB || "localhost",
      user: process.env.USER_DB || "postgres",
      password: process.env.PASS_DB || "1234",
      database: process.env.NAME_DB || "school_library",
    },
    migrations: { directory: __dirname + "/knex/migrations" },
    seeds: { directory: __dirname + "/knex/seeds" },
  },

  production: {
    client: process.env.CLIENT_DB || "pg",
    connection: {
      host: process.env.HOST_DB || "localhost",
      user: process.env.USER_DB || "postgres",
      password: process.env.PASS_DB || "1234",
      database: process.env.NAME_DB || "school_library",
    },
    migrations: { directory: __dirname + "/knex/migrations" },
    seeds: { directory: __dirname + "/knex/seeds" },
  },
};
