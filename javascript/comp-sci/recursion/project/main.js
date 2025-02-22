function fib(n) {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}


function fibsRec(n) {
    const fib = [0, 1]

    //base case
    if (n < 2) {
        return n;
    }

    return fibsRec(n-1) + fibsRec(n-2);



    //returns an array containing that many numbers from the fibonacci sequence
}

//takes an array
//returns a sorted array
let arr = [8, 7, 6, 5, 4, 3, 2, 1, 0]


function mergeSort(arr) {
    //base case
    if (arr.length <= 1) return arr;
    //else
    // divide array in half
    const arrLength = arr.length
    const mid = Math.floor(arrLength / 2)

    // how do i get the left half?
    const left = arr.slice(0, mid)

    // how do i get the right half?
    const right = arr.slice(mid)

    return merge(left, right)

            // if leftarr[]

            //return mergeSort()

    function merge() {
        const result = [];

        while (left.length && right.length) {
            
        }
    }
}