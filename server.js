import bodyParser from "body-parser"
import express from "express"
const app = express()
import { createCharacter } from "./CreateCharacter/CreateCharacter.js"


app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.json({ "Result": "Welcome to the Herofy API!" })
})

app.post("/createCharacter", (req, res) => {

    // TODO: Is for postman maybe this needs to be done for website. Testing later...
    let minPowerLevel = parseInt(req.body.minPowerLevel)
    let maxPowerLevel = parseInt(req.body.maxPowerLevel)

    res.json({
        "Character": createCharacter(
            req.body.name,
            req.body.typeBeing,
            req.body.alias,
            req.body.isHero,
            minPowerLevel,
            maxPowerLevel
        )
    })
})

app.listen(3000, () => {
    console.log("Herofy is running on port 3000..")
})