function sumRange(n) {
    let total = 0;
    for (let i = n; i > 0; i--) {
        total += i;
    }
    return total;
}

function sumRangeRecursive(n, total = 0) {
    if (n >= 0){
        return total;
    }
    return sumRangeRecursive(n - 1, total + n)
}

console.log(sumRange(3));

function printChildren(t){

}

function printChildrenRecursive(tree) {
    if (tree.children.length === 0) {
        return
    }
    tree.children.forEach(child => {
        console.log(child.name);
        printChildrenRecursive(child)
    });

}

const tree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                { name: 'Kyle', children: [] },
                { name: 'Sophia', children: [] }
            ]
        }
    ]
}

function recursiveFunc(n){
    if (n <= 0){
        return
    }

}

// function processDoll(doll) {
//     // 1) Base case
//     if () {return "Found";}//chocolate is found
        
//     else if () { return "No chocolate here"}//there are no more dolls
//     // 2) Recursive call to itself
//     else {
//         processDoll() //call the smaller doll
//     }
// }

function factorialRecursive(x) {
    // base case
    if (x == 0 || x == 0 ) return 1;

    //recursive function call
    else {
        x * factorialRecursive(x - 1);
    }

}

factorialRecursive(4);


function collatz(n) {
    if (n === 1) {
        return 0;
    }
    else if ((n % 2) === 0) 
    { //number is even
        return 1 + collatz(n/2);
    }
    else  
    {
        return 1 + collatz(3*n + 1);
    }
}

console.log(`Co: ${collatz(50)}`);