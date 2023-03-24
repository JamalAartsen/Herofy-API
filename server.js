import bodyParser from "body-parser"
import express from "express"
const app = express()
import createCharacter from "./CreateCharacter/CreateCharacter.js"
import story from "./CreateCharacter/Story/ChatGPT.js"


app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.json({ "Result": "Welcome to the Herofy API!" })
})

app.post("/createCharacter", async (req, res) => {
    let avgPowerLevel = parseInt(req.body.avgPowerLevel)


    try {
        createCharacter(
            req.body.name,
            req.body.typeBeing,
            req.body.alias,
            avgPowerLevel,
            req.body.isHero
        ).then((character) => {
            res.json({
                "Character": character
            })
        })
    } catch (error) {
        console.log(error)
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Herofy is running on port ${PORT}...`)
})