import * as type from '../type/type';

export class Adotable extends type.Animal {
	protected _tutor: string;
	protected _haveTutor: boolean = false;

	public get tutor(): string {
		return this._tutor;
	}

	private set tutor(newTutor: string) {
		this.turnCivilizated();
		this._haveTutor = true;
		this._tutor = newTutor;
	}

	public adopt(newTutor: string): void {
		this.tutor = newTutor;
	}

	freedom(): void {
		this.bornState();
		if (this._haveTutor) {
			console.log(`Tutor: ${this.tutor}`);
		}
	}
}

export class Enslavable extends type.Animal {
	protected _master: string = 'Own master';
	protected _isSlave: boolean = false;

	public get master(): string {
		return this._master;
	}

	private set master(newMaster: string) {
		this._isSlave = true;
		this._master = newMaster;
	}

	public enslave(newMaster: string) {
		this.master = newMaster;
	}

	public setFree(): void {
		this.master = 'Own Master';
		this._isSlave = false;
	}

	freedom(): void {
		this.bornState();
		if (this._isSlave) {
			console.log(`${this.master}'s Slave`);
		}
	}
}
