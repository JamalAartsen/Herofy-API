import story from "./ChatGPT.js"

// TODO: Add some more information like: Home world etc.
export default async function generateStory(name, isHero, alias, typeBeing) {
    return await story(name, isHero, alias, typeBeing)
}