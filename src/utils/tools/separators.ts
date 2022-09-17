import type { AttributeItem } from '../../types/abstracts';
import type { Skill } from '../../types/types';
import { Attribute } from '../sheet/attributes';

export const prioritySelector = (priority: number, dataType: string): number => {
	let pts: number;

	switch (dataType) {
		case 'attribute':
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
		case 'attribute':
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

export const attributeSelector = (priority: number, dataType: string): AttributeItem[] => {
	let attributes: AttributeItem[] = [];

	switch (dataType) {
		case 'attributes':
			switch (priority) {
				case 1:
					attributes[0] = new Attribute(1, 'physical');
					attributes[1] = new Attribute(2, 'social');
					attributes[2] = new Attribute(3, 'mental');
					break;
				case 2:
					attributes[0] = new Attribute(1, 'social');
					attributes[1] = new Attribute(2, 'mental');
					attributes[2] = new Attribute(3, 'physical');
					break;
				case 3:
					attributes[0] = new Attribute(1, 'mental');
					attributes[1] = new Attribute(2, 'physical');
					attributes[2] = new Attribute(3, 'social');
					break;
				case 4:
					attributes[0] = new Attribute(1, 'physical');
					attributes[1] = new Attribute(2, 'mental');
					attributes[2] = new Attribute(3, 'social');
					break;
				case 5:
					attributes[0] = new Attribute(1, 'social');
					attributes[1] = new Attribute(2, 'physical');
					attributes[2] = new Attribute(3, 'mental');
					break;
				case 6:
					attributes[0] = new Attribute(1, 'mental');
					attributes[1] = new Attribute(2, 'social');
					attributes[2] = new Attribute(3, 'physical');
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
