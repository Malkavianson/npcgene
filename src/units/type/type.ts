import type {
	CheckSheet,
	SkillSectionResponse,
} from '../../types/interfaces';
import type {
	SkillSection,
	OwnData,
} from '../../types/abstracts';
import { CardData } from '../../utils/sheet/cardData';
import { Abilities } from '../../utils/sheet/abilities';
import { Advantages } from '../../utils/sheet/advantages';
import { Attributes } from '../../utils/sheet/attributes';
import { randomizer } from '../../utils/tools/randomizers';

export class Vampire implements CheckSheet {
	_cardOwnerData: OwnData;
	_attributes: SkillSectionResponse;
	_abilities: SkillSectionResponse;
	_advantages: SkillSectionResponse;

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
		let tempAtt: SkillSection;

		this._cardOwnerData = new CardData(
			name,
			player,
			clan,
			generation
		);

		tempAtt = new Attributes(
			randomizer(5) + 1,
			this._cardOwnerData.generation()
		);
		this._attributes = tempAtt.attributes;

		tempAtt = new Abilities(
			randomizer(5) + 1,
			this._cardOwnerData.generation()
		);
		this._abilities = tempAtt.attributes;

		tempAtt = new Advantages(
			randomizer(5) + 1,
			this._cardOwnerData.generation()
		);
		this._advantages = tempAtt.attributes;
	}
}
