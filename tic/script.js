console.log("script is on ");


var turn = 'X';

// Function to change the turn
var changeTurn = function () {
    turn = turn === 'X' ? 'O' : 'X';
    return turn;
}

// Function to check for a win
var checkWin = function () {
    var boxtexts = document.querySelectorAll('.boxtext');
    var wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " wins!";
        }
    });
}

// Reset function to clear the board
var resetGame = function () {
    var boxtexts = document.querySelectorAll('.boxtext');
    boxtexts.forEach(boxtext => {
        boxtext.innerText = '';
    });
    turn = 'X';
    document.querySelector('.info').innerText = "Turn for " + turn;
}


    var boxes = document.querySelectorAll(".box");

    Array.from(boxes).forEach(element => {
        var boxtext = element.querySelector('.boxtext');
       element.addEventListener('click', () => {
            if (boxtext.innerText === '') {
                boxtext.innerText = turn;
                checkWin();  // Call the win check function after every move
            changeTurn();
                document.querySelector('.info').innerText = "Turn for " + turn;
            }
        });
    });

    // Reset button event listener
    document.getElementById('reset').addEventListener('click', resetGame);


    const changeColorInBackground = function(){

        const row = changeColorInBackground();
        const column = changeColorInBackground();
        const diagonal = changeColorInBackground();
        const color = changeColorInBackground();
        localStorage().resetGame();
        const colors  = localStorage().Array("from").addEventListener("string ").boxes("")
    }


    Array.from(boxes).forEach(){
        var boxtext =elem 
    }

