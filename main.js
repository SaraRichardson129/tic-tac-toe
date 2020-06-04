let currentPlayer = 'X';
let playerXSelections = [];
let playerOSelections = [];


const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7]
];

const cellElementArray = document.querySelectorAll('.grid-cell');
for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
    const currentCellElement = cellElementArray[elementIndex]
    currentCellElement.addEventListener('click', function (event) {
        const clickedCellElement = event.target;
        console.log("You clicked on cell number: " + clickedCellElement.id)
        clickedCellElement.innerHTML = currentPlayer
        if (currentPlayer === 'X') {
            playerXSelections.push(Number(clickedCellElement.id))
            currentPlayer = 'O'
            if (checkForWin(winningCombinations, playerXSelections)) {
                alert('Player X Wins')
            }
            console.log(playerXSelections)
        } else if (currentPlayer === 'O') {
            playerOSelections.push(Number(clickedCellElement.id))
            currentPlayer = 'X'
            if (checkForWin(winningCombinations, playerOSelections)) {
                alert('Player O Wins')
            }
            console.log(playerOSelections)
        }



        function checkForWin(winningCombinations, playerSelection) {
            for (let index = 0; index < winningCombinations.length; index += 1) {
                let matches = 0
                let currentWinningCombonation = winningCombinations[index]
                for (let innerIndex = 0; innerIndex < currentWinningCombonation.length; innerIndex += 1) {
                    let currentNumber = currentWinningCombonation[innerIndex];
                    if (playerSelection.includes(currentNumber)) {
                        matches += 1
                        if (matches === 3) {
                            console.log('Win')
                            return true
                        }
                    }
                }
            }
            return false
        }
    });
}


