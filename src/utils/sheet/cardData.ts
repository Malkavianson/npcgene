import { nameGenerator, clanSelector } from '../tools/randomizers';
import { OwnData } from '../../types/abstracts';

export class CardData extends OwnData {
	constructor(
		name?: string,
		player?: string,
		// nature?: string,
		// demeanor?: string,
		// concept?: string,
		clan?: string,
		generation?: number
		// sire?: string,
	) {
		super();
		this._creation = Date.now();
		this._id = `porpo1${this._creation}`;

		if (name) {
			this._name = name;
		} else {
			this._name = nameGenerator();
		}
		if (player) {
			this._player = player;
		} else {
			this._player = 'NPC';
		}
		if (clan) {
			this._clan = clan;
		} else {
			this._clan = clanSelector();
		}
		if (generation) {
			this._generation = generation;
		}
	}
}
