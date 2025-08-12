function Animal(){
    this.type = "Animal"
}

Animal.prototype.sound = function(){
    console.log(`Animal sound`)
}

function Dog(){
    Animal.call(this)
}

Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.sound = function(){
    console.log("Bark")
}

Dog.prototype.contructor = Dog

let myDog = new Dog()
myDog.sound()
