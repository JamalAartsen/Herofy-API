export default class Power {
    constructor(name) {
        this.name = name
        this.level = this.generateLevel()
    }

    generateLevel() {
        return Math.floor(Math.random() * 7) + 1
    }
}