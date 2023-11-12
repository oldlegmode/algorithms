const merge = (arrLeft, arrRight) => {
    const mergedArr = [];

    let leftCounter = 0, rigthCounter = 0;
    
    while (leftCounter < arrLeft.length || rigthCounter < arrRight.length) {
        if (arrLeft[leftCounter] === undefined) {
            mergedArr.push(arrRight[rigthCounter]);
            rigthCounter++;
            continue; 
        } 
        if (arrRight[rigthCounter] === undefined) {
            mergedArr.push(arrLeft[leftCounter]);
            leftCounter++;
            continue;
        }

        if (arrLeft[leftCounter] < arrRight[rigthCounter]) {
            mergedArr.push(arrLeft[leftCounter]);
            leftCounter++;
        } else {
            mergedArr.push(arrRight[rigthCounter]);
            rigthCounter++;
        }
    }
    
    return mergedArr;
}

const mergeSort = (arr) => {
    if (arr.length > 2) {
        const middleOfArr = Math.ceil(arr.length / 2);
        return merge(
            mergeSort(arr.slice(0, middleOfArr)), 
            mergeSort(arr.slice(middleOfArr))
        );
    }


    if (arr.length === 2) {
        if (arr[0] > arr[1]) {
            [arr[0], arr[1]] = [arr[1], arr[0]];
        }
    }
    
    return arr;
}

module.exports = {
    merge,
    mergeSort
};