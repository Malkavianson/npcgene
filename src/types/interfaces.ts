import type {
	// AttributeType,
	OwnData
} from './abstracts';
import type { Skill } from './types';

export interface CheckSheet {
	_cardOwnerData: OwnData;
	// _attributes: AttributesObject;
	// _abilities: AttributeType;
	// _advantages: AttributeType;
}

export interface SheetData {
	id: string;
	creation: number;
	name: string;
	player: string;
	clan: string;
	generation: number;
}

export interface Advantages {
	_disciplines: Skill[];
	_backgrounds: Skill[];
	_virtues: Skill[];
}

export interface FeatureType {
	dataType: string;
	type: string;
	features: Skill[];
	stand?: number;
}

export interface AttributesObject {
	type: string;
	physical: FeatureType;
	social: FeatureType;
	mental: FeatureType;
}
