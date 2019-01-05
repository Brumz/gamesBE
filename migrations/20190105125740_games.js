exports.up = (knex, Promise) => {
    return knex.schema.createTable("games", (game) => {
        game.increments("id")
        game.string("title")
        game.string("publisher")
        game.string("developer")
        game.integer("year")
        game.boolean("multiplayer")
        game.string("rating")
        game.string("poster")
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists("games")
};