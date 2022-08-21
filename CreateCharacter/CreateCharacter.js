import generatePowers from "./Powers/GeneratePowers.js"
import generateStory from "./Story/CharacterStory.js"
import Character from "./Character.js"
import type from "./TypeOfCharacter.js"

function createCharacter(name, being, alias, isHero, minPowerLevel, maxPowerLevel) {
    const powers = generatePowers(minPowerLevel, maxPowerLevel)

    return new Character(name, being, type(isHero), alias, averagePowerLevel(powers), powers, generateStory(name, isHero))
}

function averagePowerLevel(powers) {
    const sum = powers.map(l => l.level).reduce((a, b) => a + b)

    return (sum / powers.length)
}

export { createCharacter }