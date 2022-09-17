import { Skill } from '../../types/types';
import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';

export const randomizer = (i: number): number => {
	return Math.floor(Math.random() * i);
};

export const DicePlay = {
	dice: (sides: number = 6): number => {
		return randomizer(sides) + 1;
	},

	action: (dices: number = 2, sides: number = 6): number[] => {
		let dropped: number[] = [];
		for (let i = 0; dices > i; i++) {
			const drop = DicePlay.dice(sides);
			dropped.push(drop);
		}
		return dropped;
	},
};

export const nameGenerator = (): string => {
	const config: Config = {
		dictionaries: [names, names],
		separator: ' ',
		length: 2,
		style: 'capital',
	};

	const name = uniqueNamesGenerator(config);
	return name;
};

export const clanSelector = (): string => {
	const clans = [
		'Brujah',
		'Gangrel',
		'Nosferatu',
		'Malkavian',
		'Toreador',
		'Tremere',
		'Ventrue',
		'Lasombra',
		'Tzimisce',
		'Followers of Set',
		'Giovanni',
		'Assamite',
		'Ravnos',
	];
	const selected = randomizer(clans.length);
	return clans[selected];
};

export const fillSkills = (features: Skill[], pts: number): Skill[] => {
	do {
		const fortuna = randomizer(2);
		features[fortuna][1]++;
		pts--;
	} while (pts > 0);

	return features;
};
