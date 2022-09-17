import { SkillGroup, SkillSection } from '../../types/abstracts';
import {
	attributeSelector,
	featureSelector,
	prioritySelector,
} from '../tools/separators';
import { fillSkills } from '../tools/randomizers';

export class Attributes extends SkillSection {
	constructor(priority: number, dataType: string) {
		super();
		this._dataType = dataType;
		this._attributes = attributeSelector(priority, dataType);
	}
}

export class Attribute extends SkillGroup {
	constructor(priority: number, type: string, dataType: string) {
		super();
		const pts = prioritySelector(priority, dataType);
		this._type = type;
		this._dataType = dataType;
		this._features = featureSelector(type, dataType);
		this._features = fillSkills(this._features, pts);
	}
}
