import type { AnimalState } from 'types/unitTypes';

export class Animal {
	readonly _born: number;
	protected _name: string = 'unnamed';
	protected _wildless: boolean = true;
	protected _language: string = '...';
	protected _hp: number = 100;
	protected _mp: number = 5;

	constructor(name?: string | undefined) {
		if (name) {
			this._name = name;
		}
		this._born = Date.now();
	}

	public get name() {
		return this._name;
	}

	private get currentHP() {
		return this._hp;
	}
	private get currentMP() {
		return this._mp;
	}

	private set name(name: string) {
		this._name = name;
	}
	private set hpGain(gainedHP: number) {
		if (this._hp + gainedHP > 100) {
			this._hp = 100;
		} else {
			this._hp = this._hp + gainedHP;
		}
	}
	private set hpLose(losedHP: number) {
		if (this._hp - losedHP <= 0) {
			this._hp = 0;
		} else {
			this._hp = this._hp - losedHP;
		}
	}
	private set mpGain(gainedMP: number) {
		if (this._mp + gainedMP > 100) {
			this._mp = 100;
		} else {
			this._mp = this._mp + gainedMP;
		}
	}
	private set mpLose(losedMP: number) {
		if (this._mp - losedMP <= 0) {
			this._mp = 0;
		} else {
			this._mp = this._mp - losedMP;
		}
	}

	public hp(action?: string | undefined, value?: number | undefined): number {
		switch (action) {
			case 'increase':
				this.hpGain = value;
				break;
			case 'decrease':
				this.hpLose = value;
				break;
			default:
				this.currentHP;
				break;
		}
		return this.currentHP;
	}
	public mp(action?: string | undefined, value?: number | undefined): number {
		switch (action) {
			case 'increase':
				this.mpGain = value;
				break;
			case 'decrease':
				this.mpLose = value;
				break;
			default:
				this.currentMP;
				break;
		}
		return this.currentMP;
	}

	protected bornState(): string {
		if (this._wildless) {
			return 'Wild';
		}
	}
	public freedom(): string {
		if (this.bornState()) {
			return this.bornState();
		}
	}

	public speach(): string {
		return this._language;
	}

	public rename(newName: string): void {
		this.name = newName;
	}
	public teachSpeach(newLanguage: string): void {
		this._language = newLanguage;
	}
	public turnCivilizated(): void {
		this._wildless = false;
	}

	public showState(): AnimalState {
		const currentState = {
			creation: this._born,
			name: this.name,
			freedom: this.freedom(),
			civilizated: !this._wildless,
			speach: this.speach(),
			hp: this.hp(),
			mp: this.mp(),
		};
		return currentState;
	}
}
