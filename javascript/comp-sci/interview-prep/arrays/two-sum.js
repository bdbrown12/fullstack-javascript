function twoSum(arr, target) {
    let sum = 0;

    //find a pair of elements in the array whose sum is equal to the target

    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === target){
                return true;
            }
        }
    }

    return false;
}

function twoPointer(arr, target) {
    let left = 0
    let right = arr.length - 1;

    arr.sort((a,b) => a - b);

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target){
            return true;
        }
        // if i add two numbers together (i.e sum) and the result is less than the target 
        // how can i move closer to the target?
        else if (sum < target) {
            //move left pointer to the right
            left++;
        }
        else
            right--;
    }
}

let arr = [0, -1, 2, -3, 1];
let target = -2;

twoSum(arr, target); //returns true
