export class Animal {
	protected _name: string = 'unnamed';
	protected _wildless: boolean = true;
	protected _born: number;
	protected _language: string = '...';

	constructor(name?: string | undefined) {
		if (name) {
			this._name = name;
		}
		this._born = Date.now();
	}

	public get name() {
		return this._name;
	}

	private set name(name: string) {
		this._name = name;
	}

	public rename(newName: string): void {
		this.name = newName;
	}

	public bornState(): void {
		if (this._wildless) {
			console.log('Wild');
		}
	}

	public turnCivilizated(): void {
		this._wildless = false;
	}

	public teachSpeach(newLanguage: string): void {
		this._language = newLanguage;
	}

	public speach(): void {
		console.log(this._language);
	}

	public freedom(): void {
		this.bornState();
	}

	public showState(): void {
		console.log(`Name: ${this._name}`);
		this.freedom();
		this.speach();
	}
}
