// Define the Tree class (Parent Class)
class Tree {
    constructor(species) {
        this.species = species; // Assign species to a property
    }

    // Static method definition() for Tree
    static definition() {
        return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
}

// Define the Deciduous class (Child Class)
class Deciduous extends Tree {
    constructor(species, name) {
        super(species); // Call the parent class constructor to set species
        this.name = name; // Set the name property
    }

    // Static method definition() for Deciduous
    static definition() {
        return `${super.definition()} Deciduous trees shed their leaves annually.`;
    }
}

// Define the Evergreen class (Child Class)
class Evergreen extends Tree {
    constructor(species, name) {
        super(species); // Call the parent class constructor to set species
        this.name = name; // Set the name property
    }

    // Static method definition() for Evergreen
    static definition() {
        return `${super.definition()} Evergreens keep their leaves all year round.`;
    }
}

// Example Usage
const oak = new Deciduous("Oak", "Mighty Oak");
const pine = new Evergreen("Pine", "Evergreen Pine");

console.log(oak.species); // Oak
console.log(oak.name); // Mighty Oak
console.log(pine.species); // Pine
console.log(pine.name); // Evergreen Pine

console.log(Tree.definition());
// A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.

console.log(Deciduous.definition());
// A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually.

console.log(Evergreen.definition());
// A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round.
