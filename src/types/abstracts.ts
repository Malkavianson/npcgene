import type {
	SkillSectionResponse,
	SkillGroupResponse,
	SheetData,
} from './interfaces';
import type { Skill } from './types';

export abstract class OwnData {
	protected _creation: number;
	protected _id: string;
	protected _name: string;
	protected _player: string;
	protected _clan: string;
	protected _generation: number = 13;
	// protected _nature: string;
	// protected _demeanor: string;
	// protected _concept: string;
	// protected _sire: string;

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

	public generation(
		action?: string,
		value?: number
	): number {
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

export abstract class SkillSection {
	protected _dataType: string;
	protected _attributes: SkillGroup[];

	public get attributes(): SkillSectionResponse {
		return;
	}
}

export abstract class SkillGroup {
	protected _type: string;
	protected _dataType: string;
	protected _features: Skill[];

	public get features(): SkillGroupResponse {
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
			case 'talents':
				stand = 0;
				break;
			case 'skills':
				stand = 1;
				break;
			case 'knowledges':
				stand = 2;
				break;
			case 'disciplines':
				stand = 0;
				break;
			case 'backgrounds':
				stand = 1;
				break;
			case 'virtues':
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
