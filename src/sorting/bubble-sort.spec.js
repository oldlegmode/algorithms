const bubbleSorting = require('./bubble-sort');

const test1 = [10, 31, 11, 26, 35];
const test2 = [5, 2, 4, 1, 4];
const test3 = [5, 2, -4, -1, 4];
const result1 = [10, 11, 26, 31, 35];
const result2 = [1, 2, 4, 4, 5];
const result3 = [-4, -1, 2, 4, 5];

const testCases = [
    [test1, result1],
    [test2, result2],
    [test3, result3]
];

describe('bubble sort', () => {
    testCases.forEach(([pattern, result], i) => {
        test(`test${++i}: ${JSON.stringify(pattern)}`, () => {
            expect(bubbleSorting(pattern)).toEqual(result);
    });
  });
});