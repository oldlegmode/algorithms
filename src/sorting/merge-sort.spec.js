const {merge, mergeSort} = require('./merge-sort');

const test1 = [10, 31, 11, 26, 35];
const test2 = [5, 2, 4, 1, 4];
const test3 = [5, 2, -4, -1, 4];
const test4 = [2, 1];
const result1 = [10, 11, 26, 31, 35];
const result2 = [1, 2, 4, 4, 5];
const result3 = [-4, -1, 2, 4, 5];
const result4 = [1, 2];

const testCases = [
    [test1, result1],
    [test2, result2],
    [test3, result3],
    [test4, result4],
];

describe('merge two arrays function', () => {
    test('test1 merge function', () => {
        const leftArr = [2,4];
        const rightArr = [1,3];
        const expectedArr = [1, 2, 3, 4];

        expect(merge(leftArr, rightArr)).toEqual(expectedArr)
    });

    test('test2 merge function', () => {
        const leftArr = [1, 2];
        const rightArr = [3, 4];
        const expectedArr = [1, 2, 3, 4];

        expect(merge(leftArr, rightArr)).toEqual(expectedArr)
    })

    test('test2 merge function', () => {
        const leftArr = [3, 4];
        const rightArr = [1, 2];
        const expectedArr = [1, 2, 3, 4];

        expect(merge(leftArr, rightArr)).toEqual(expectedArr)
    }) 
})

describe('merge sort', () => { 
    testCases.forEach(([pattern, result], i) => {
        test(`test${++i}: ${JSON.stringify(pattern)}`, () => {
            expect(mergeSort(pattern)).toEqual(result);
        });
    });
});