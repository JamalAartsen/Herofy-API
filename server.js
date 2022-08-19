import express from "express"
const app = express()
import { createCharacter } from "./CreateCharacter/CreateCharacter.js"


app.get("/", (req, res) => {
    res.json({ "Character": createCharacter("Jamsz", "Cosmic being", false, 25, 42) })
})

app.listen(3000, () => {
    console.log("Herofy is running on port 3000..")
})