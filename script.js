let player = "X";
let board = ["", "", "", "", "", "", "", "", ""];

const buttons = document.querySelectorAll(".itenButton");
const currentPlayer = document.getElementById("currentPlayer");
const reset = document.getElementById("reset");

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

    return wins.some(win =>
        board[win[0]] &&
        board[win[0]] === board[win[1]] &&
        board[win[1]] === board[win[2]]
    );
}

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
            currentPlayer.innerHTML = "Draw!"
            reset.style.display = "block";
            return;
        }

        player = player == "X" ? "O" : "X";
        currentPlayer.innerHTML = player + "&apos;s turn";

    };
});

reset.onclick = () => {
    location.reload();
};