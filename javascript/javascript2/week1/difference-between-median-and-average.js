const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

// const testArr = [1,9,4,3,8];

function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let average = Math.ceil(sum/array.length);
    return `The average of array [${array}] is: ${average}`;
};

function sortAscending(_array) {
    return _array.sort(function(a,b){return a - b});
}

function median(array) {
    const sortedArray = sortAscending([...array]);
    let mid = Math.ceil(sortedArray.length / 2);
    let median = sortedArray[mid];
    return `The median of array [${array}] is: ${median}`;
};
  
// console.log(average(testArr));
// console.log(median(testArr));

console.log(average(housePrices));
console.log(median(housePrices));

