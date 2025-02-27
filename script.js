let attempts = 0;
let maxAttempts = 5;

const words = ["BRICK", "FLAME", "SHARP", "FROST", "BLACK", "CHARM", "GLOVE", "DRIFT", "SPENT", "CLIMB", "JUMPS", "PLANK", "SHOWN", "TREND", "SLICK", "VOTER", "BRISK", "COUNT", "DWARF", "GLINT", "CHOSE", "JOINT", "MIRTH", "SQUID", "HATCH", "FLYER", "BRUNT", "PLUMB", "STOCK", "VERGE", "TWIST", "CROWN", "GEARS", "HOUND", "NOVEL", "ORBIT", "QUEST", "ROAST", "EARTH", "ROACH", "SCAMP", "TONED", "VITAL", "WAXER", "ZEBRA", "QUICK"];
randomNum = Math.floor(Math.random() * words.length);
let word = words [randomNum];

function getUserGuess() {
    if (attempts < maxAttempts) {
        let guess = prompt("Enter a 5-letter word: ").toUpperCase();
        attempts++;

        let row = 'attempt-' + attempts;
        let column0 = 'word-' + attempts + '-letter-' + 0;
        let column1 = 'word-' + attempts + '-letter-' + 1;
        let column2 = 'word-' + attempts + '-letter-' + 2;
        let column3 = 'word-' + attempts + '-letter-' + 3;
        let column4 = 'word-' + attempts + '-letter-' + 4;

        document.getElementById(column0).innerHTML = guess.charAt(0);
        document.getElementById(column1).innerHTML = guess.charAt(1);
        document.getElementById(column2).innerHTML = guess.charAt(2);
        document.getElementById(column3).innerHTML = guess.charAt(3);
        document.getElementById(column4).innerHTML = guess.charAt(4);
        let colors = ["transparent", "transparent", "transparent", "transparent", "transparent"]

        if (guess.charAt(0) === word.charAt(0)) {
            colors[0] = "green";
        } else if (word.includes(guess.charAt(0))) {
            colors[0] = "yellow";
        } else {
            colors[0] = "red";
        }

        if (guess.charAt(1) === word.charAt(1)) {
            colors[1] = "green";
        } else if (word.includes(guess.charAt(1))) {
            colors[1] = "yellow";
        } else {
            colors[1] = "red";
        }

        if (guess.charAt(2) === word.charAt(2)) {
            colors[2] = "green";
        } else if (word.includes(guess.charAt(2))) {
            colors[2] = "yellow";
        } else {
            colors[2] = "red";
        }

        if (guess.charAt(3) === word.charAt(3)) {
            colors[3] = "green";
        } else if (word.includes(guess.charAt(3))) {
            colors[3] = "yellow";
        } else {
            colors[3] = "red";
        }

        if (guess.charAt(4) === word.charAt(4)) {
            colors[4] = "green";
        } else if (word.includes(guess.charAt(4))) {
            colors[4] = "yellow";
        } else {
            colors[4] = "red";
        }

        changeBox(column0, guess.charAt(0), colors[0]);
        changeBox(column1, guess.charAt(1), colors[1]);
        changeBox(column2, guess.charAt(2), colors[2]);
        changeBox(column3, guess.charAt(3), colors[3]);
        changeBox(column4, guess.charAt(4), colors[4]);

        if (guess === word) {
            alert('Congratulations! You guessed the word!');
            reGame();
        } else if (attempts === maxAttempts) {
            alert('You lost the game. The correct word is: ' + word);
            reGame();
        }
    }

    function changeBox(id, letter, color) {
        let element = document.getElementById(id);
        if (element) {
            element.innerHTML = letter;
            element.style.backgroundColor = color;
        }
    }

    function reGame() {
        let restart = confirm('Do you want to restart?');

        if (restart) {
            location.reload();
        }
    }
}
