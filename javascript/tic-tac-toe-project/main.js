//store the gameboard as an array inside of a Gameboard object

//create a Gameboard object

function GameBoard() {
    let gameArray = ['', '', ''];

    const player = Player("Kaleb", "X");

    runGame(gameArray, player);
}

function Player(name, marker, score) {
    this.name = name;
    this.marker = marker;
    this.score = score;

    return {name, marker, score};
}

function runGame(array, player) {
    //what do i want to happen when i run the game?

    //let the player place their marker anywhere on the board
    let playerMarker = player.marker;

    //the computer should then place their marker

    //if the player or the computer get 3 in a row increment their score by 1
}

GameBoard();