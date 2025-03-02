//find if there exists any pair of elements such that their sum is equal to the target.

// Naive Method – O(n^2) Time and O(1) Space

function twoSum(arr, target) {
    let n = arr.length;

    for (let i = 0; i < n; i++){
        for (let j = i + 1; j < n; j++){
            if (arr[i] + arr[j] === target) {
                return true;
            }
        }
    }

    return false;

}

let arr = [0, -1, 2, -3, 1];
let target = -2;


// Call the twoSum function and print the result
if (twoSum(arr, target))
    console.log("true");
else 
    console.log("false");


let unsortedArr = [1,4,45,6,10,-8];

function sortArr(arr) {
    let n = arr.length;
    //use a selection sort

    //compare the smallest found # to the next element. After loop is complete, swap smallest w/ array[i]

    for (let i = 0; i < n; i ++){
        let smallestIndex = i;

        //find the smallest element in the remaining array
        for (let j = i + 1; j < n; j++){
            if (arr[j] < arr[smallestIndex]) {
                smallestIndex = j;
            }
        }

        if (smallestIndex !== i) {
            //switch the first element of the array with the smallestindex
            let temp = arr[i];
            arr[i] = arr[smallestIndex];
            arr[smallestIndex] = temp;
        }

        return arr;

        //compare two array elements
        
    }

}



function twoSumPointer(arr, target) 
{

    

    let left = 0, right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        //check if the sum matches the target
        if (sum === target) return true;
        // move the left pointer to the right
        else if (sum < target) left++;
        // move the right pointer to the left
        else right--;
    }

    // If no pair is found
    return false;

}


