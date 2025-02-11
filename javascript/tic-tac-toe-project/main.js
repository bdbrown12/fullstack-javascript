//store the gameboard as an array inside of a Gameboard object

//create a Gameboard object

function GameBoard() {
    let gameArray = ['X', '', '',
                     '', '', '',
                     '', '', ''];

    const player = Player("Kaleb", "X");
    const opponent = Player("Computer", "O");

    player.isTurn = true; //Change later, makes it so the player always goes first

    runGame(gameArray, player, opponent);

    return {gameArray, player, opponent}
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

    //you select either X or O (make this dynamic later)
    const playerMarker = player.marker; // X
    const opponentMarker = opponent.marker; // O

    //figure out who's turn it is
    console.log(player.isTurn);
    console.log(opponent.isTurn);

    //check if the board is filled or not
    let boardFull = array.every((index) => {
        return index !== '';
    });

    if (boardFull){
        console.log('Game Over')
    } else {
        console.log('Keep playing');

        if (player.isTurn) {
            playerTurn(player, array);
        } else {
            opponentTurn();
        }
    }




    // end game

    function playerTurn(player, array) {
        //if grid spot has value

        //how do i get the value of each item in an array and update it in the array?
        array.forEach((index, array) => {
            let playerSelection = 2; //based on what the player selects

            //grab that array element and set it to the player's marker
            if (index === playerSelection) {
                array[index] = playerMarker;
            }
            
            //render the changes to the display
            //updateArray(array)

            //change turns
            player.isTurn = false;
            opponent.isTurn = true;
        });

        //what do i need in a function that updates the array?
        //first, it should be passed the array
        

        //player places marker on the board

        //player can't place if spot has value

        //change turn status
    }


    //your turn ends

    //the computer/opponent can now place their marker on the board
    function opponentTurn() {
        
    }

    //the computer should then place their marker

    //if the player or the computer get 3 in a row increment their score by 1
}

let game = GameBoard();
console.log(game.gameArray);