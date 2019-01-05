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









app.listen(port, () => {
    console.log('listening on port:', port)
})