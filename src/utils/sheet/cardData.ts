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
		super(name, player, /* nature, demeanor, concept?: string,*/ clan, generation /*, sire*/);
	}
}
