const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3000
const queries = require("./queries")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())

app.get("/", (req, res) => {
    res.send("hello world")
})
app.get("/games", (req, res) => {
    queries.listAllGames().then(games => {
        res.json(games)
    })
})
app.get("/games/:id", (req, res) => {
    queries.listGameById(req.params.id).then(game => {
        res.json(game)
    })
})
app.post("/games", (req, res) => {
    queries.createNewGame(req.body).then(game => {
        res.status(201).send(game)
    })
})
app.put("/games/:id", (req, res) => {
    queries.updateGame(req.params.id, req.body).then(game => {
        res.status(200).send(game[0])
    })
})
app.delete("/games/:id", (req, res) => {
    queries.deleteGameById(req.params.id).then(game => {
        res.status(204).send("Game has been deleted")
    })
})




app.listen(port, () => {
    console.log('listening on port:', port)
})