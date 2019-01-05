module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://localhost/games"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }

};