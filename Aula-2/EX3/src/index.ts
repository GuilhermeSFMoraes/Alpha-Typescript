interface ICharacter {
    class: "Warrior" | "Mage" | "Archer",
    equip: "Sword" | "Staff" | "Bow",
    life: number
}

enum Action {
    Attack = 1,
    Defend,
    UseItem,
    Escape
}

function rpg(char: ICharacter, action: Action): void {
    switch(action){
        case 1:
            console.log(`O ${char.class} está atacando!`);
            break;
        case 2:
            console.log(`O ${char.class} está defendendo!`);
            break;
        case 3:
            console.log(`O ${char.class} está usando item!`);
            break;
        case 4:
            console.log(`O ${char.class} está fugindo!`);
            break;
    }
}

const person1: ICharacter = {
    class: "Warrior",
    equip: "Sword",
    life: 40
}

const person2: ICharacter = {
    class: "Archer",
    equip: "Bow",
    life: 25
} 

const person3: ICharacter = {
    class: "Mage",
    equip: "Staff",
    life: 15
}  


rpg(person1, 1);
rpg(person2, 2);
rpg(person3, 3);
rpg(person3, 4);