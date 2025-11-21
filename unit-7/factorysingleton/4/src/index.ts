interface Character {
  getState(): string;
}

class Archer implements Character {
  constructor(private name: string) {}
  getState(): string {
    return `Archer ${this.name} - Agility: 80, Strength : 40`;
  }
}

class Mage implements Character {
  constructor(private name: string) {}
  getState(): string {
    return `Mage ${this.name} - Intelligence: 90, Mana: 100`;
  }
}

class Warrior implements Character {
  constructor(private name: string) {}
  getState(): string {
    return `Warrior ${this.name} - Agility: 80, Strength : 40`;
  }
}

class CharacterFactory {
  static createCharacter(character: string, name: string) {
    if (character === "Warrior") return new Warrior(name);
    if (character === "Mage") return new Mage(name);
    if (character === "Archer") return new Archer(name);
  }
}

const archer = CharacterFactory.createCharacter("Archer", "Eldrin");
console.log(archer?.getState());
// Output: Archer Eldrin - Agility: 80, Strength: 40

const mage = CharacterFactory.createCharacter("Mage", "Gandalf");
console.log(mage?.getState());
// Output: Mage Gandalf - Intelligence: 90, Mana: 100
