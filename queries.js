const db = require("./database-connection")
module.exports = {
    listAllGames() {
        return db("games")
    }
}