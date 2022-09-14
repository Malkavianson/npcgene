export const DicePlay = {
	dice: (sides: number=6): number => { return Math.floor(Math.random() * sides) + 1},

	action: (dices: number = 2, sides: number = 6): number[] => {
		let dropped: number[] = [];
		for (let i = 0; dices > i; i++) {
			const drop = DicePlay.dice(sides);
			dropped.push(drop);
		}
		return dropped;
	},
};