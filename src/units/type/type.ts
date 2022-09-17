import type { AttributesObject, CheckSheet } from '../../types/interfaces';
import type {
	AttributeType,
	OwnData
} from '../../types/abstracts';
// import { randomizer } from '../../utils/tools/randomizers';
import { CardData } from '../../utils/sheet/cardData';
// import { Attributes } from '../../utils/sheet/attributes';

export class Vampire implements CheckSheet {
	_cardOwnerData: OwnData;
	// _attributes: AttributesObject;
	// 	_abilities: AttributeType;
	// 	_advantages: AttributeType;
	private _attPriority: number;

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
		let tempAtt: AttributeType;
		this._cardOwnerData = new CardData(name, player, clan, generation);
		// this._attPriority = 1;
		// tempAtt = new Attributes(this._attPriority);
		// this._attributes = tempAtt.attributes


		// 		// RETORNA OS ATRIBUTOS (PAREI AQUI)
		// 		// console.log(this._attributes.attributes);
	}
}
