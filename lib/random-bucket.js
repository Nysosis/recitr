"use strict";
class RandomBucket {
    constructor(items) {
        items = items.slice();
        let random = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
        let shuffleArray = (array) => {
            let clone = array.slice();
            for (let i = clone.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = clone[i];
                clone[i] = clone[j];
                clone[j] = temp;
            }
            return clone;
        };
        let bucket = [];
        this.leak = () => {
            if (!items.length) {
                return undefined;
            }
            if (!bucket.length) {
                let bucketSize = Math.min(random(3, 10), items.length);
                bucket = shuffleArray(items).slice(0, bucketSize);
            }
            return bucket.shift();
        };
    }
}
exports.RandomBucket = RandomBucket;
//# sourceMappingURL=random-bucket.js.map