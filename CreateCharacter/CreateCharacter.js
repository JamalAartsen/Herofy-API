import generatePowers from "./Powers/GeneratePowers.js"
import generateStory from "./Story/CharacterStory.js"
import Character from "./Character.js"
import type from "./TypeOfCharacter.js"

// TODO: Alias for character
function createCharacter(name, being, isHero, minPowerLevel, maxPowerLevel) {
    const powers = generatePowers(minPowerLevel, maxPowerLevel)

    return new Character(name, being, type(isHero), averagePowerLevel(powers), powers, generateStory(name, isHero))
}

function averagePowerLevel(powers) {
    const sum = powers.map(l => l.level).reduce((a, b) => a + b)

    return (sum / powers.length)
}

export { createCharacter }