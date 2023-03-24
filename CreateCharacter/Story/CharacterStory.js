import story from "./ChatGPT.js"

export default async function generateStory(name, isHero, alias, typeBeing) {
    return await story(name, isHero, alias, typeBeing)
}