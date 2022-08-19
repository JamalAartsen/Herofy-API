export default function generateStory(name, isHero) {
    if (isHero) {
        return heroStory(name)
    } else {
        return villianStory(name)
    }
}

// Hiervoor kan een design pattern gebruikt worden
function villianStory(name) {
    return "Villian story for " + name
}

function heroStory(name) {
    return "Hero story for " + name
}