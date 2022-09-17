import type { SkillSection, OwnData } from './abstracts';
import type { Skill } from './types';

export interface CheckSheet {
	_cardOwnerData: OwnData;
	_attributes: SkillSectionAttributeResponse;
	_abilities: SkillSection;
	_advantages: SkillSection;
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

export interface SkillGroupResponse {
	dataType: string;
	type: string;
	features: Skill[];
	stand?: number;
}

export interface SkillSectionAttributeResponse {
	type: string;
	physical: SkillGroupResponse;
	social: SkillGroupResponse;
	mental: SkillGroupResponse;
}
