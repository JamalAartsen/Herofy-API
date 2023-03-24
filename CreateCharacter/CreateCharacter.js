import generatePowers from "./Powers/GeneratePowers.js"
import generateStory from "./Story/CharacterStory.js"
import Character from "./Character.js"
import type from "./TypeOfCharacter.js"

export default async function createCharacter(name, typeBeing, alias, avgPowerLevel, isHero) {
    let generatedPowers = generatePowers(avgPowerLevel)
    let story = await generateStory(name, isHero, alias, typeBeing)

    return new Character(name, typeBeing, type(isHero), alias, avgPowerLevel, generatedPowers, story)
}