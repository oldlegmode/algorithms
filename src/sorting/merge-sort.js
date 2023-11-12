const merge = (arrLeft, arrRight) => {
    const mergedArr = [];
    let leftCounter = rigthCounter = 0;
    
    while (leftCounter < arrLeft.length && rigthCounter < arrRight.length) {
        mergedArr.push(arrLeft[leftCounter] < arrRight[rigthCounter] 
            ? arrLeft[leftCounter++] 
            : arrRight[rigthCounter++]
        );
    }
    
    return [
        ...mergedArr,
        ...arrLeft.slice(leftCounter),
        ...arrRight.slice(rigthCounter)
    ];
}

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    
    const middleOfArr = Math.ceil(arr.length / 2);
    
    return merge(
        mergeSort(arr.slice(0, middleOfArr)), 
        mergeSort(arr.slice(middleOfArr))
    );
}

module.exports = {
    merge,
    mergeSort
};