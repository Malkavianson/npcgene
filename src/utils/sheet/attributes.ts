import {
	AttributeItem,
	AttributeType
} from '../../types/abstracts';

export class Attributes extends AttributeType {
	constructor(priority: number) {
		super(priority, 'attributes');
	}
}

export class Attribute extends AttributeItem {
	constructor(priority: number, type: string) {
		super(priority, type, 'attribute');
	}
}
