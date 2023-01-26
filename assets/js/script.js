const height = 6; //number of guesses
const width = 5; //lenght of word
 

let row = 0; // current guess (attempt)
let col = 0; // current letter for that attempt

let gameOver = false;
let word = "SQUID";


window.onload = function(){
    initialise();
}

function initialise() {
    // Create board 
    for (let i = 0; i < height; i++) {
        for ( let j = 0; j < width; j++) {
            let tile = document.createElement("span");
            tile.id = i.toString() + "-" + j.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }
    // Listen for Key press
    document.addEventListener("keyup",(e) => {
        if (gameOver) return; 

        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (col < width) {
                let currTile = document.getElementById(row.toString() + "-" + col.toString());
                if (currTile.innerText == "") {
                    currTile.innerText = e.code[3];
                    col += 1;
                }
            }
        } else if (e.code == "Backspace") {
            if (0 < col  && col <= width) {
                col -= 1;
            }
            let currTile = document.getElementById(row.toString() + "-" + col.toString());
            currTile.innerText = "";
        } else if (e.code == "Enter") {
            update();
            row += 1;
            col = 0; 
        }

        if (!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = word;
        }
    })
}

function update() {
    let correct = 0;
    for (let i = 0; i < width; i++) {
        let currTile = document.getElementById(row.toString() + "-" + i.toString());
        let letter = currTile.innerText;

        //is the letter in the correct possitin
        if (word[i] == letter) {
            currTile.classList.add("correct");
            correct += 1;
        } //is the letter in the word
        else if (word.includes(letter)) {
            currTile.classList.add("present");
        } // not in the word
        else {
            currTile.classList.add("absent");
        }

        if (correct == width) {
            gameOver = true;
        }
    }
}