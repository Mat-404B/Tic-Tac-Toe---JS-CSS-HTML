// Start
let player = "X";

// Grid Rule
let board = ["", "", "", "", "", "", "", "", ""];

const buttons = document.querySelectorAll(".itenButton");
const currentPlayer = document.getElementById("currentPlayer");
const reset = document.getElementById("reset");

// First Player
currentPlayer.innerHTML = player + "&apos;s turn";

// Victory Condition
function checkWin() {
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ];

    // Victory Check
    return wins.some(win =>
        board[win[0]] &&
        board[win[0]] === board[win[1]] &&
        board[win[1]] === board[win[2]]
    );
}

    //Buttons as Table - Win and Draw
buttons.forEach(button => {
    button.onclick = () => {
        let pos = button.id;
        console.log(pos);

        if (board[pos] != "") return;

        board[pos] = player;
        button.textContent = player;
        
        if (checkWin()) {
            currentPlayer.textContent = player + " WON!";
            buttons.forEach(b => b.disabled = true);
            reset.style.display = "block";
            return;
        }

        if (!board.includes("")) {
            currentPlayer.innerHTML = "Draw!";
            reset.style.display = "block";
            return;
        }


        // X to O
        player = player == "X" ? "O" : "X";
        // "Player's" Turn - Change the Icon
        currentPlayer.innerHTML = player + "&apos;s turn";

    };
});

//Reset Button
reset.onclick = () => {
    location.reload();
};
