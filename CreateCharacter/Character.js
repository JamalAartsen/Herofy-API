export default class Character {
    constructor(name, being, type, avgPowerLevel, PowerLevels, story) {
        this.name = name
        this.being = being
        this.type = type
        this.avgPowerLevel = avgPowerLevel
        this.PowerLevels = PowerLevels
        this.story = story
    }
}

class PowerLevels {
    constructor(intelligence, strength, speed, durability, energyProjection, fightingSkills) {
        this.intelligence = intelligence
        this.strength = strength
        this. speed = speed
        this.durability = durability
        this.energyProjection = energyProjection
        this.fightingSkills = fightingSkills
    }
}