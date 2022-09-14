import * as type from '../type/type';

export class Adotable extends type.Animal {
	protected _tutor: string = 'Unmentored';
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
		if (newTutor) {
			this.tutor = newTutor;
		}
	}
	public untutoring(): void {
		if (this._haveTutor) {
			this.tutor = 'Own Tutor';
			this._haveTutor = false;
		}
	}

	freedom(): string {
		if (this.bornState()) {
			return this.bornState();
		} else if (!this.bornState() && this._haveTutor) {
			return `Tutor: ${this.tutor}`;
		} else {
			return `${this.tutor}`;
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
		if (newMaster) {
			this.master = newMaster;
		}
	}

	public setFree(): void {
		this.master = 'Own Master';
		this._isSlave = false;
	}

	freedom(): string {
		if (this.bornState()) {
			return this.bornState();
		} else if (!this.bornState() && this._isSlave) {
			return `${this.master}'s Slave`;
		} else {
			return `${this.master}`;
		}
	}
}
