import {
	nameGenerator,
	clanSelector,
	idCreator,
} from '../tools/randomizers';
import { OwnData } from '../../types/abstracts';

export class CardData extends OwnData {
	constructor(
		name?: string,
		player?: string,
		clan?: string,
		generation?: number
		// nature?: string,
		// demeanor?: string,
		// concept?: string,
		// sire?: string,
	) {
		super();
		this._creation = Date.now();
		this._id = idCreator();
		
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
