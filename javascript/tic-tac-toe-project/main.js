//store the gameboard as an array inside of a Gameboard object

//create a Gameboard object

function GameBoard() {
    let gameArray = ['', '', '',
                     '', '', '',
                     '', '', ''];

    const player = Player("Kaleb", "X");
    const opponent = Player("Computer", "O");

    runGame(gameArray, player, opponent);
}

function Player(name, marker, score) {
    this.name = name;
    this.marker = marker;
    this.score = score;
    this.isTurn = isTurn = false;

    return {name, marker, score, isTurn};
}

function runGame(array, player, opponent) {
    //what happens when you start a game of tik tac toe?

    //figure out who's turn it is
    console.log(player.isTurn);
    console.log(opponent.isTurn);

    //check if the board is filled or not
    let boardFull = array.every((index) => {
        index !== '';
    })

    if (boardFull){
        console.log('Game Over')
    } else {
        console.log('Keep playing');
        //playerTurn();
        //opponentTurn();
    }

    // if (boardFull) board is full
    
        //end game

    // else
        // if (isturn)
            // playerTurn()
        // else
            // oppentTurn()



    // end game

    //you select either X or O (make this dynamic later)
    const playerMarker = player.marker; // X
    const opponentMarker = opponent.marker; // O

    function playerTurn() {
        //you then place your marker on the board
        array[0] = playerMarker;
        console.log(array);

        //change turn status
    }


    //your turn ends

    //the computer/opponent can now place their marker on the board
    function opponentTurn() {
        
    }

    //the computer should then place their marker

    //if the player or the computer get 3 in a row increment their score by 1
}

GameBoard();