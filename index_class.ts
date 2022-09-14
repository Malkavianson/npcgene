import { DicePlay } from './src/utils/tools/randomizers';
import * as species from './src/units/species/species';
console.clear();

// const kitty = new species.Cat();
// const puppy = new species.Dog();
// const mustang = new species.Horse();
// const baby = new species.Pig();

const slave = new species.Horse('Cavalim');
const pet = new species.Cat('Januário');

// 		Animal methods
console.log(slave.name);

console.log(slave.hp());
console.log(slave.hp('decrease', 20));
console.log(slave.hp('increase', 10));

console.log(slave.mp());
console.log(slave.mp('decrease', 2));
console.log(slave.mp('increase', 1));

console.log(slave.freedom());
console.log(slave.speach());

slave.rename('Pe de pano');
slave.teachSpeach('I can talk in english now O.O ');
slave.turnCivilizated();

console.log(slave.showState());

// 		Enslavable methods
slave.enslave('Chico');
console.log(slave.master);
slave.setFree();
console.log(slave.freedom());

// 		Adotable methods
pet.adopt('Tião');
console.log(pet.tutor);
pet.untutoring();
console.log(pet.freedom());

// 		DicePlay tool
console.log(DicePlay.action());
console.log(DicePlay.action(3, 10));
console.log(DicePlay.dice());
console.log(DicePlay.dice(10));
