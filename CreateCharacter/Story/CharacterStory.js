import story from "./ChatGPT.js"

export default async function generateStory(name, isHero, alias, typeBeing, powers, weaknesses) {
    return await story(name, isHero, alias, typeBeing, powers, weaknesses)
}