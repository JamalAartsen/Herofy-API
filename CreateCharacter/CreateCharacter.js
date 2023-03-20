import generatePowers from "./Powers/GeneratePowers.js"
import generateStory from "./Story/CharacterStory.js"
import Character from "./Character.js"
import type from "./TypeOfCharacter.js"

// TODO: Add weaknesses
export default async function createCharacter(name, being, alias, avgPowerLevel, isHero, powers, weaknesses) {
    let generatedPowers = generatePowers(avgPowerLevel)
    let story = await generateStory(name, isHero, alias, being)

    return new Character(name, being, type(isHero), alias, avgPowerLevel, generatedPowers, story)
}