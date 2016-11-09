"use strict";
const fs = require('fs');
const random_bucket_1 = require("./random-bucket");
class Recitr {
    constructor(statements) {
        statements = statements.map(s => s.trim()).filter(s => s !== "");
        if (!statements.length) {
            this.say = () => "I have nothing to say.";
        }
        let bucket = new random_bucket_1.RandomBucket(statements);
        this.say = bucket.leak;
    }
}
Recitr.fromStatements = (statements) => new Recitr(statements);
Recitr.fromFile = (statementsPath) => {
    let promise = new Promise((resolve, reject) => {
        fs.readFile(statementsPath, 'utf-8', (err, data) => {
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
exports.Recitr = Recitr;
//# sourceMappingURL=recitr.js.map