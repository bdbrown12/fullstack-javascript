// algorithms with the same conplexity

// the time complexity of this algorithm is o(N)
// as the data size increases, the number of steps of
// our algorithm increases at the same rate

function oddNumbers(maxNumber) {
    let currentNumber = 1;

    while (currentNumber < maxNumber) {
        if (currentNumber % 2 !== 0) { //current number is odd
            console.log(currentNumber);
        } 

        currentNumber += 1
    }
}


// this is an algorithmn of o(N/2) but constants aren't
// relative to how an algorithmn scales as the input changes
// therefore, the efficiency is o(N)

function oddNumbers2(maxNumber) {
    let currentNumber = 1;

    while (currentNumber < maxNumber) {
        if (currentNumber % 2 !== 0) console.log(currentNumber);

        currentNumber += 2;
    }
}

// create a function, reverseArray, which loops over the input array
// starting at the last item, and builds up a new array which// ends up being the input array
// reversed

// this is of linear time complexity Big O(n)

function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const reversedArray1 = reverseArray([1,2,3]) // [3,2,1]
const reversedArray2 = reverseArray([1,2,3,4,5,6]) // [6,5,4,3,2,1]

// quadratic time Big O(n^2)

// this function accepts 2 arrays.
function multiplyAll(arr1, arr2) {
// first it makes sure that they are of equal length
    if (arr1.length !== arr2.length) return undefined;

    let total = 0;
    // then it will continue down and multiply every number in the first
    // array with every number in the seoncd array and return the sum of all these products
    for (let i = 0; i < arr1.length; i++){ 
        for (let j = 0; j < arr2.length; j++) {
            total += arr1[i] = arr2[j];
        }
    }

    return total;
}

let result1 = multiplyAll([1, 2], [5, 6]);
console.log(`The result is: ${result1}`);
