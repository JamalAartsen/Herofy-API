import generatePowers from "./Powers/GeneratePowers.js"
import generateStory from "./Story/CharacterStory.js"
import Character from "./Character.js"
import type from "./TypeOfCharacter.js"

function createCharacter(name, being, alias, avgPowerLevel, isHero) {
    const powers = generatePowers(avgPowerLevel)

    return new Character(name, being, type(isHero), alias, avgPowerLevel, powers, generateStory(name, isHero))
}

export { createCharacter }