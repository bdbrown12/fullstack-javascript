// O(1) - CONSTANT COMPLEXITY

function multiply(num1, num2) {
    return num1 * num2; // no matter how many arguments we pass to function call, only a single value is created (the product of the numbers)
}

// O(N) - LINEAR COMPLEXITY
function sumArray(arr) {
    const copyArr = arr.slice();
    let sum = 0;
    copyArr.forEach((number) => {
        sum += number;
    });

    return sum;
}

console.log(sumArray([1,2,3,4,5,6,7,8,9]));


// THE COMPLEXITY IS REPLICATED NO MATTER THE DATA STRUCTURE
function sumObjectValues(obj) {
    const copyObject = { ...obj };
    let sum = 0;
    Object.values(copyObject).forEach((value) => { //object.values returns an array of an object's own enumerable string-keyed property values
        sum += value;
    });
    return sum;
}


