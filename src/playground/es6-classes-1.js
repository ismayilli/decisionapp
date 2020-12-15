class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old. `;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name,age)
        this.homeLocation = homeLocation
    }
    getDescription() {
        let description = super.getDescription();
        if(this.homeLocation) {
            description += `He is coming from ${this.homeLocation}`
        }
        return description;
    }
}

const me = new Traveller("Isa Ismayilli",22,"fucking Azerbaijan")
console.log(me.getDescription())

const you = new Traveller()
console.log(you.getDescription())
