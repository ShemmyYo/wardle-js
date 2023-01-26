const height = 6; //number of guesses
const width = 5; //lenght of word
 

const row = 0; // current guess (attempt)
const col = 0; // current letter for that attempt

let gameOver = false;
let word = "SQUID";


window.onload = function(){
    initialize();
}

function initialize() {
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
}