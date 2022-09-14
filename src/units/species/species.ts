import * as condition from '../condition/condition';

export class Cat extends condition.Adotable {
	protected type: string = 'Cat';
	constructor(name: string = 'Cat') {
		super(name);
		this._language = 'Miau Miau';
	}
}

export class Dog extends condition.Adotable {
	protected type: string = 'Dog';
	constructor(name: string = 'Dog') {
		super(name);
		this._language = 'Au Au';
	}
}
export class Horse extends condition.Enslavable {
	protected type: string = 'Horse';
	constructor(name: string = 'Horse') {
		super(name);
		this._language = 'Hiin-in-in hiin-in-in';
	}
}
export class Pig extends condition.Enslavable {
	protected type: string = 'Pig';
	constructor(name: string = 'Pig') {
		super(name);
		this._language = 'Oinc oinc!';
	}
}