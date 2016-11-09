export class RandomBucket<CollectionType> {

	public leak: () => CollectionType;

	constructor(items: CollectionType[]) {
		items = items.slice();
		let random = (max: number, min: number) => Math.floor(Math.random() * (max - min + 1) + min);
		let shuffleArray = (array: CollectionType[]) => {
			let clone = array.slice();
			for (let i = clone.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1));
				let temp = clone[i];
				clone[i] = clone[j];
				clone[j] = temp;
			}

			return clone;
		};

		let bucket = [] as CollectionType[];

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
