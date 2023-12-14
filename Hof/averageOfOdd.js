let arr = [10, 24, 56, 72, -10, -88, 100, 564];

// Use reduce and filter to find the sum and count of elements at odd indices
let result = arr.reduce((acc, curr, index) => {
    if (index % 2 === 1) { // Check if the index is odd
        acc.sum += curr;
        acc.count++;
    }
    return acc;
}, { sum: 0, count: 0 });

// Calculate the average
let average = result.count === 0 ? 0 : result.sum / result.count;

console.log("Average of elements at odd indices:", average);