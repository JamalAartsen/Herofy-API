export default class Character {
    constructor(name, being, type, alias, avgPowerLevel, PowerLevels, story) {
        this.name = name
        this.being = being
        this.type = type
        this.alias = alias
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