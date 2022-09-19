import {
	SkillGroup,
	SkillSection,
} from '../../types/abstracts';
import {
	attributeSelector,
	featureSelector,
	prioritySelector,
} from '../tools/separators';
import { fillSkills } from '../tools/randomizers';
import {
	SkillGroupResponse,
	SkillSectionAttributeResponse,
} from '../../types/interfaces';

export class Attributes extends SkillSection {
	constructor(priority: number, generation: number) {
		super();
		this._dataType = 'attributes';
		this._attributes = attributeSelector(
			priority,
			this._dataType,
			generation
		);
	}

	public get attributes(): SkillSectionAttributeResponse {
		const att: SkillGroupResponse[] = this._attributes
			.map(e => {
				return e.features;
			})
			.sort((a, b) => {
				return a.stand < b.stand
					? -1
					: a.stand > b.stand
					? 1
					: 0;
			});
		att.forEach((e: SkillGroupResponse) => delete e.stand);

		const res: SkillSectionAttributeResponse = {
			type: this._dataType,
			physical: att[0],
			social: att[1],
			mental: att[2],
		};

		return res;
	}
}

export class Attribute extends SkillGroup {
	constructor(
		priority: number,
		type: string,
		dataType: string,
		generation: number
	) {
		super();
		const pts = prioritySelector(priority, dataType);
		this._type = type;
		this._dataType = dataType;
		this._features = featureSelector(type, dataType);
		this._features = fillSkills(
			this._features,
			pts,
			generation
		);
	}
}
