
// function Return a Boolean if a number is divisible by 10

function sheckNum(number) {
    if (typeof number !== 'number') {
        throw new Error("Input must be a number.");
    }
    return number % 10 === 0;
}
console.log(sheckNum(10))


// function that finds the maximum number in an array

function findMaximum(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error("Input must be a non-empty array.");
    }
    return Math.max(...array);
}
console.log( findMaximum([1,5,4,7]))

// function that reverses an array

function reverseArray(array) {
    if (!Array.isArray(array)){
        throw new Error("Input must be an array.");
    }
    return array.slice().reverse();
}
console.log( reverseArray([1,5,4,7]))