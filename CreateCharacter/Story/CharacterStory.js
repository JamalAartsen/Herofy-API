import heroStory from "./HeroStory.js"
import villianStory from "./VillianStory.js"

export default function generateStory(name, isHero) {
    if (isHero) {
        return heroStory(name)
    } else {
        return villianStory(name)
    }
}