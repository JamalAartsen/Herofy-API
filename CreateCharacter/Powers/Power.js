export default class Power {
    constructor(name) {
        this.name = name
        this.level = this.generateLevel()
    }

    generateLevel() {
        let level = Math.floor(Math.random() * 7) + 1
        return level
    }

    log() {
        console.log("Name: " + this.name + " Level: " + this.level)
    }
}