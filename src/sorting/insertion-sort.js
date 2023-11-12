const insertionSort = (arr) => {
    const length = arr.length;

    for (let i = 1; i < length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j - 1] < arr[j]) {
                break
            }
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        }
    }

    return arr;
}

module.exports = insertionSort;