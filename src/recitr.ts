import * as fs from 'fs';
import { RandomBucket } from "./random-bucket";

export class Recitr {

	public static fromStatements = (statements: string[]) => new Recitr(statements);

	public static fromFile = (statementsPath: string) => {
		let promise = new Promise<Recitr>((resolve, reject) => {
			fs.readFile(statementsPath, 'utf-8', (err, data: string) => {
				if (err) {
					reject(err);
					return;
				}

				let statements = data.split('\n').map(s => s.trim()).filter(s => s !== "");
				if (!statements.length) {
					reject("No statments found in the file");
					return;
				}

				resolve(Recitr.fromStatements(statements));
			});
		});

		return promise;
	};

	public say: () => string;

	private constructor(statements: string[]) {
		statements = statements.map(s => s.trim()).filter(s => s !== "");
		if (!statements.length) {
			this.say = () => "I have nothing to say.";
		}

		let bucket = new RandomBucket(statements);
		this.say = bucket.leak;
	}
}
