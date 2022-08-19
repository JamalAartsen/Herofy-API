import generatePowers from "./Powers/GeneratePowers.js"
import generateStory from "./CharacterStory.js"
import Character from "./Character.js"

// TODO: Alias for character
function createCharacter(name, typeBeing, isHero, minPowerLevel, maxPowerLevel) {
    const powers = generatePowers(minPowerLevel, maxPowerLevel)
    return new Character(name, typeBeing, averagePowerLevel(powers), powers, generateStory(name, isHero))
}

function averagePowerLevel(powers) {
    const sum = powers.map(l => l.level).reduce((a, b) => a + b)

    return (sum / powers.length)
}

export { createCharacter }