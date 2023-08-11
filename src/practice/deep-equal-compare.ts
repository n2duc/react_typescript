function deepEqualCompare<T>(
    a: T extends any[] ? "dont pass array here" : T,
    b: T extends any[] ? "dont pass array here" : T
): boolean {
    return a === b;
}
deepEqualCompare(true, true);
deepEqualCompare(2, 2);
deepEqualCompare("duc", "duc");
// deepEqualCompare([1,2,3], [32]);