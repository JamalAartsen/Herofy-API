import Power from "./Power.js"

export default function generatePowers(avgPowerLevel) {
    let powerLevels = powers()
    let sumLevels = powerLevels.map(l => l.level).reduce((a, b) => a + b)

    while (sumLevels != totalPowerLevels(avgPowerLevel)) {
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

function totalPowerLevels(avgPowerLevel) {
    switch (avgPowerLevel) {
        case 1:
            return random(8, 1)
        case 2:
            return random(14, 9)
        case 3:
            return random(20, 15)
        case 4:
            return random(26, 21)
        case 5:
            return random(32, 27)
        case 6:
            return random(38, 33)
        case 7:
            return random(42, 39)
    }
}

function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}