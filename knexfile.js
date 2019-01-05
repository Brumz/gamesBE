module.exports = {

  development: {
    client: "pg",
    connection: "postgresql://localhost/games"
  },

  staging: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }

};