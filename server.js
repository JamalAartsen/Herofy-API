import bodyParser from "body-parser"
import express from "express"
const app = express()
import { createCharacter } from "./CreateCharacter/CreateCharacter.js"


app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.json({ "Result": "Welcome to the Herofy API!" })
})

app.post("/createCharacter", (req, res) => {
    let avgPowerLevel = parseInt(req.body.avgPowerLevel)

    res.json({
        "Character": createCharacter(
            req.body.name,
            req.body.typeBeing,
            req.body.alias,
            avgPowerLevel,
            req.body.isHero
        )
    })
})

app.listen(3000, () => {
    console.log("Herofy is running on port 3000..")
})