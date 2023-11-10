const bubbleSorting = (arr) => {
    const arrLength = arr.length;
    for (let i = 1; i < arrLength; i++) {
        for (let j = 0; j < arrLength; j++) {
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            }
        }
    }

    return arr;
}

module.exports = bubbleSorting;