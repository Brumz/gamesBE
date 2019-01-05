const db = require("./database-connection")
module.exports = {
    listAllGames() {
        return db("games")
    },
    listGameById(id) {
        return db("games").where("id", id).first()
    }
}