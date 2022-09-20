// import { DicePlay } from './src/utils/tools/randomizers';
// import * as species from './src/units/clan/clan';
import { Vampire } from "./src/units/type/type";
console.clear();

const teste = new Vampire("Otto Straus", "Alexandre Pereira", "Malkavian", 10);
// console.log();
// console.log();
// console.log(teste);

// console.log();
// console.log();
// console.log(teste._cardOwnerData.generation('decrease', 1));
// console.log(teste._cardOwnerData.generation());
// console.log();
console.log(teste._cardOwnerData.sheetData);

// console.log();
// console.log();
// console.log(teste._attributes);
// console.log();
// console.log(teste._attributes.physical.features);
// console.log(teste._attributes.social.features);
// console.log(teste._attributes.mental.features);

// console.log();
// console.log();
// console.log(teste._abilities);
// console.log();
// console.log(teste._abilities.talents.features);
// console.log(teste._abilities.skills.features);
// console.log(teste._abilities.knowledges.features);

// console.log();
// console.log();
// console.log(teste._advantages);
// console.log();
// console.log(teste._advantages.disciplines.features);
// console.log(teste._advantages.backgrounds.features);
// console.log(teste._advantages.virtues.features);

// _______________________________________________________
//              Para terminar

// const vampireSabath = new species.Tzimisce('Cavalim');
// const vampireCamarilla = new species.Malkavian('Januário');

// // 		Vampire methods
// console.log(vampireSabath.name);

// console.log(vampireSabath.hp());
// console.log(vampireSabath.hp('decrease', 20));
// console.log(vampireSabath.hp('increase', 10));

// console.log(vampireSabath.mp());
// console.log(vampireSabath.mp('decrease', 2));
// console.log(vampireSabath.mp('increase', 1));

// console.log(vampireSabath.freedom());
// console.log(vampireSabath.speach());

// vampireSabath.rename('Pe de pano');
// vampireSabath.teachSpeach('I can talk in english now O.O ');
// vampireSabath.turnCivilizated();

// console.log(vampireSabath.showState());

// // 		Sabat methods
// vampireSabath.enslave('Chico');
// console.log(vampireSabath.master);
// vampireSabath.setFree();
// console.log(vampireSabath.freedom());

// // 		Adotable methods
// vampireCamarilla.adopt('Tião');
// console.log(vampireCamarilla.tutor);
// vampireCamarilla.untutoring();
// console.log(vampireCamarilla.freedom());

// // 		DicePlay tool
// console.log(DicePlay.action());
// console.log(DicePlay.action(3, 10));
// console.log(DicePlay.dice());
// console.log(DicePlay.dice(10));
