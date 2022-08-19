import Power from "./Power.js"

export default function generatePowers(min, max) {
    let totalPowerLevels = Math.floor(Math.random() * (max - min + 1) + min)
    let powerLevels = powers()

    let sumLevels = powerLevels.map(l => l.level).reduce((a, b) => a + b)

    while (sumLevels != totalPowerLevels) {
        powerLevels = powers()
        sumLevels = powerLevels.map(l => l.level).reduce((a, b) => a + b)
    }

    return powerLevels
}

function powers() {
    let intelligence = new Power("Intelligence")
    let strength = new Power("Strength")
    let speed = new Power("Speed")
    let durability = new Power("Durability")
    let energyProjection = new Power("Energy Projection")
    let fightingSkills = new Power("Fighting Skills")

    return [intelligence, strength, speed, durability, energyProjection, fightingSkills]
}