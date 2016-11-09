import { RandomBucket } from "./random-bucket";
import * as chai from "chai";
import "mocha";

const expect = chai.expect;

describe("random-bucket", () => {
	it("should greet with message", () => {
		const bucket = new RandomBucket<number>(Array.apply(null, { length: 10 }).map(Number.call, Number));
		expect(bucket.leak()).to.above(-1).below(11);
	});
});
