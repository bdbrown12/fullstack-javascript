// Create a 9x9 square

let board = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]
];

// Numbers 1-9 w/ no repeated numbers in each line, horizontally or vertically

let userInput = 0;

let isUniqueRow = function () {

}


// function to determine if row is unique

let isRowValid = function (rowIndex) {
    //create an empty array to store seen numbers
    let seenNumbers = [];

    // iterate over elements in row
    for (let j = 0; j < board[rowIndex].length; j++) {
        //store element at row 
        let num = board[rowIndex][j];

        if (seenNumbers.includes(num)) {
            return false;
        }

        // Add number to the tracking array
        seenNumbers.push(num);
    }

    return true; // Row is valid if no duplicates
}

// function to determine if column is unique
// let isColumnValid = function(columnIndex){
//     let seenNumbers = []

//     for (let i = 0;)
//     let num = board[i][columnIndex]

//     if (seenNumbers.includes(num)){
//         return false;
//     }

//     seenNumbers.push(num)

// }

// function to determine if grid is unique

let isGridValid = function () {
    // board[i][]


    let board = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [2, 3, 1, 5, 6, 4, 8, 9, 7],
        [3, 1, 2, 6, 4, 5, 9, 7, 8],
        [4, 5, 6, 7, 8, 9, 1, 2, 3],
        [5, 6, 4, 8, 9, 7, 2, 3, 1],
        [6, 4, 5, 9, 7, 8, 3, 1, 2],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],
        [8, 9, 7, 2, 3, 1, 5, 6, 4],
        [9, 7, 8, 3, 1, 2, 6, 4, 5]
    ];


    //divide the board into 3x3 grids

    //upper left bound
    //board[0][0] board[0][3] board[0][6]

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            console.log(board[i][j]);
            if (j <= 2) {
                

            } else if (j >=3 && j <= 5) {
                console.log('\n');

            } else if (j >= 8) {
                console.log('\n');
            }
        }
        console.log('\n');
    }

    //bottom right bound
    //board[2][2] board[2][5] board[2][8]

}

isGridValid();