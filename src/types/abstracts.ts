import type {
	AttributesObject,
	FeatureType,
	SheetData
} from './interfaces';
import type { Skill } from './types';
import {
	attributeSelector,
	featureSelector,
	prioritySelector
} from '../utils/tools/separators';
import { nameGenerator, clanSelector } from '../utils/tools/randomizers';
import { fillSkills } from '../utils/tools/randomizers';

export class OwnData {
	private _creation: number;
	private _id: string;
	private _name: string;
	private _player: string;
	private _clan: string;
	private _generation: number = 13;
	// private _nature: string;
	// private _demeanor: string;
	// private _concept: string;
	// private _sire: string;

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

	public get sheetData(): SheetData {
		return {
			id: this._id,
			creation: this._creation,
			name: this._name,
			player: this._player,
			clan: this._clan,
			generation: this._generation,
		};
	}

	public generation(action?: string, value?: number): number {
		switch (action) {
			case 'decrease':
				this._generation = this._generation - value;
				break;
			default:
				break;
		}
		return this._generation;
	}
}

export class AttributeType {
	private _dataType: string;
	private _attributes: AttributeItem[];

	constructor(priority: number, dataType: string) {
		this._dataType = dataType;
		this._attributes = attributeSelector(priority, dataType);
	}

	public get attributes(): AttributesObject {
		const attributes: FeatureType[] = this._attributes
			.map(e => e.features())
			.sort((a, b) => {
				return a.stand < b.stand ? -1 : a.stand > b.stand ? 1 : 0;
			});
		attributes.forEach((e: FeatureType) => delete e.stand);

		const res: AttributesObject = {
			type: this._dataType,
			physical: attributes[0],
			social: attributes[1],
			mental: attributes[2],
		};

		return res;
	}
}

export class AttributeItem {
	private _type: string;
	private _dataType: string;
	private _features: Skill[];

	constructor(priority: number, type: string, dataType: string) {
		const pts = prioritySelector(priority, dataType);
		this._type = type;
		this._dataType = dataType;
		this._features = featureSelector(type, dataType);
		this._features = fillSkills(this._features, pts);
	}

	public features(): FeatureType {
		let stand: number;

		switch (this._type) {
			case 'physical':
				stand = 0;
				break;
			case 'social':
				stand = 1;
				break;
			case 'mental':
				stand = 2;
				break;

			default:
				break;
		}
		return {
			dataType: this._dataType,
			type: this._type,
			features: this._features,
			stand,
		};
	}
}
