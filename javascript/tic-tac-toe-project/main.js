const modal = document.querySelector('#modal')
const openStart = document.querySelector("#btn-start");
const closeStart = document.querySelector("#btn-close-modal");
const cells = document.querySelectorAll(".cell");
const playerForm = document.querySelector("#player-form");
const btnReset = document.querySelector("#btn-reset");
const submitButton = document.querySelector("#btn-submit-player");

let gameboard; // Declare gameboard outside so it's accessible for both resetting and running the game
let gameStarted = false; // A flag to track if the game has started

// Ensure submit button outside the form manually triggers form submission
submitButton.addEventListener("click", (e) => {
    e.preventDefault();  // Prevent default button behavior
    playerForm.requestSubmit();  // Manually trigger form submission
});

playerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //formValidation(//return true or false)
    const inputName = document.querySelector("#playerName");
    const selectedMarker = document.querySelector("input[name='playerMarker']:checked");

    //remove existing validation messages if any
    const existingMsg = document.querySelector(".validation-message");
    if (existingMsg) {
        existingMsg.remove();
    }

    //check if name is valid
    if (inputName.value.trim() === "") {
        const validationMsg = document.createElement("div")
        validationMsg.innerHTML = "Please enter a name.";
        validationMsg.classList.add("validation-message");

        inputName.insertAdjacentElement("afterend", validationMsg);
        return; //Stop execution if validation fails
    }

    //check if radio button is selected
    if (!selectedMarker) {
        const validationMsg = document.createElement("div");
        validationMsg.innerHTML = "Please select a marker";
        validationMsg.classList.add("validation-message");
        inputName.insertAdjacentElement("afterend", validationMsg);
        return;
    }

    //create a new player
    const newPlayer = Player(inputName.value.trim(), selectedMarker.id);

    //get the opposite of player marker and use that to create a new opponent
    const opponentMarker = selectedMarker.id === "X" ? "O" : "X";
    const opponent = Player("Opponent", opponentMarker, undefined, false);

    // Close the modal after successful form submission
    modal.style.opacity = 0;
    modal.style.transition = 'opacity 200ms';  // Smooth transition

    // Close Modal
    setTimeout(() => {
        modal.close();  // Close the modal
        modal.style.display = 'none';  // Ensure it doesn't occupy space
    }, 200);

    runGame(newPlayer, opponent);

});

function runGame(player, opponent) {
    //create the gameboard
    gameboard = Array(9).fill(null);
    //mark the game as started
    gameStarted = true;

    function playerTurn(index) {
        // Check if the cell is empty
        if (gameboard[index] !== null) return;

        // Update the gameboard and UI
        gameboard[index] = player.marker;
        cells[index].textContent = player.marker;

        //check for winner ***
        if (checkWinner(player.marker)) {
            alert(`${player.name} wins!`);
            return;
        }

        //switch turns
        player.isTurn = false;
        opponent.isTurn = true;

        // Call opponent's turn after a short delay
        setTimeout(() => opponentTurn(), 500);

    }

    function opponentTurn() {
        let availableSpaces = [];

        gameboard.forEach((cell, index) => {
            if (cell === null || cell === '') {
                availableSpaces.push(index);
            }
        });

        if (availableSpaces.length === 0) return 'Game over';

        let randomIndex = availableSpaces[Math.floor(Math.random() * availableSpaces.length)]

        //update gameboard and UI
        gameboard[randomIndex] = opponent.marker;
        cells[randomIndex].textContent = opponent.marker;

        //check for winner 
        if (checkWinner(opponent.marker)) {
            setTimeout(() => {
                alert(`${opponent.name} wins!`);
            }, 100);
            return;
        }

        //switch to players turn
        opponent.isTurn = false;
        player.isTurn = true;
    }

    function checkWinner(marker) {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], //Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        return winningCombinations.some(combination =>
            combination.every(index => gameboard[index] === marker)
        );
    }

    cells.forEach((cell, index) => {
        //show the players marker if they hover over an available space
        cell.addEventListener('mouseenter', () => {
            if (!gameboard[index] && player.isTurn) {
                cell.style.cursor = "pointer";
                cell.textContent = player.marker;
            }
        });
        //remove player marker when their mouse exits the cell
        cell.addEventListener('mouseleave', () => {
            if (!gameboard[index]) {
                cell.textContent = "";
            }
        });

        // Click functionality for the player's turn
        cell.addEventListener("click", () => {
            if (player.isTurn && gameboard[index] === null) {
                playerTurn(index); // Call player turn
            }
        });
    });

    // Initial call to the player turn (if the player starts)
    if (player.isTurn) {
        playerTurn(); // Ensure the player starts
    }


}

//declare one variable in runGame and one global
btnReset.addEventListener('click', () => {
    if (!gameStarted) {
        // If the game hasn't started, reload the page
        window.location.reload();
    } else {
        // If the game has started, reset the gameboard and update the grid
        gameboard = Array(9).fill(null);
        cells.forEach(cell => {
            cell.textContent = '';
            cell.style.color = '';
        });
    }
});

openStart.addEventListener('click', () => {
    modal.showModal();
    modal.style.opacity = 1;
    modal.style.transition = '200ms';
});

closeStart.addEventListener('click', () => {
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.close();
    }, 200); // Wait for 200ms before closing
});

//player constructor
function Player(name, marker, score) {
    return { name, marker, score: 0, isTurn: true };
}