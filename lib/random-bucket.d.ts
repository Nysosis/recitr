export declare class RandomBucket<CollectionType> {
    leak: () => CollectionType;
    constructor(items: CollectionType[]);
}
