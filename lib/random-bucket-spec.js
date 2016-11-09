"use strict";
const random_bucket_1 = require("./random-bucket");
const chai = require("chai");
require("mocha");
const expect = chai.expect;
describe("random-bucket", () => {
    it("should greet with message", () => {
        const bucket = new random_bucket_1.RandomBucket(Array.apply(null, { length: 10 }).map(Number.call, Number));
        expect(bucket.leak()).to.above(-1).below(11);
    });
});
//# sourceMappingURL=random-bucket-spec.js.map