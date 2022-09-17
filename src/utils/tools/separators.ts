import type { SkillGroup } from '../../types/abstracts';
import type { Skill } from '../../types/types';
import { Attribute } from '../sheet/attributes';

export const prioritySelector = (
	priority: number,
	dataType: string
): number => {
	let pts: number;
	switch (dataType) {
		case 'attributes':
			switch (priority) {
				case 1:
					pts = 7;
					break;
				case 2:
					pts = 5;
					break;
				case 3:
					pts = 3;
					break;
			}
			break;

		default:
			break;
	}
	return pts;
};

export const featureSelector = (type: string, dataType: string): Skill[] => {
	let features: Skill[];
	switch (dataType) {
		case 'attributes':
			switch (type) {
				case 'physical':
					features = [
						['Strength', 1],
						['Dexterity', 1],
						['Stamina', 1],
					];
					break;
				case 'social':
					features = [
						['Manipulation', 1],
						['Appearance', 1],
						['Charisma', 1],
					];
					break;
				case 'mental':
					features = [
						['Intelligence', 1],
						['Wits', 1],
						['Perception', 1],
					];
					break;
			}
			break;

		default:
			break;
	}
	return features;
};

export const attributeSelector = (
	priority: number,
	dataType: string
): SkillGroup[] => {
	let attributes: SkillGroup[] = [];
	switch (dataType) {
		case 'attributes':
			switch (priority) {
				case 1:
					attributes[0] = new Attribute(1, 'physical', dataType);
					attributes[1] = new Attribute(2, 'social', dataType);
					attributes[2] = new Attribute(3, 'mental', dataType);
					break;
				case 2:
					attributes[0] = new Attribute(1, 'social', dataType);
					attributes[1] = new Attribute(2, 'mental', dataType);
					attributes[2] = new Attribute(3, 'physical', dataType);
					break;
				case 3:
					attributes[0] = new Attribute(1, 'mental', dataType);
					attributes[1] = new Attribute(2, 'physical', dataType);
					attributes[2] = new Attribute(3, 'social', dataType);
					break;
				case 4:
					attributes[0] = new Attribute(1, 'physical', dataType);
					attributes[1] = new Attribute(2, 'mental', dataType);
					attributes[2] = new Attribute(3, 'social', dataType);
					break;
				case 5:
					attributes[0] = new Attribute(1, 'social', dataType);
					attributes[1] = new Attribute(2, 'physical', dataType);
					attributes[2] = new Attribute(3, 'mental', dataType);
					break;
				case 6:
					attributes[0] = new Attribute(1, 'mental', dataType);
					attributes[1] = new Attribute(2, 'social', dataType);
					attributes[2] = new Attribute(3, 'physical', dataType);
					break;
				default:
					break;
			}
			break;

		default:
			break;
	}
	return attributes;
};
