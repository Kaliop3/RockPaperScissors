const rs = require("readline-sync");
console.log("Gramy w Kamień Papier i Nożyczki \nKamień-K\nPapier-P\nNożyczki-N");
const set = rs.question("Jak dużo chcesz zagrać rund? ");
let draw = 0, win = 0, lost = 0;
let poss = ["K", "P", "N"];
let emojiC = "";
let emojiG = "";
for (let i = 0; i < set; i++) {
    const choice = rs.question("Pokaż swój wybór ").toUpperCase();
    let los = Math.floor(Math.random() * poss.length);
    if (poss[los] == choice) {
        draw++;
    }
    else if (poss[los] == "K" && choice == "P" || poss[los] == "N" && choice == "K" || poss[los] == "P" && choice == "N") {
        win++;
    }
    else if (poss[los] == "P" && choice == "K" || poss[los] == "K" && choice == "N" || poss[los] == "N" && choice == "P") {
        lost++;
    }
    switch (poss[los]) {
        case "K": {
            emojiC = "💎";
            break;
        }
        case "P": {
            emojiC = "📜";
            break;
        }
        case "N": {
            emojiC = "✂️";
            break;
        }
    }
    switch (choice) {
        case "K": {
            emojiG = "💎";
            break;
        }
        case "P": {
            emojiG = "📜";
            break;
        }
        case "N": {
            emojiG = "✂️";
            break;
        }
    }
    console.log(emojiC, emojiG);
}
console.log("Wygrałeś " + win + "\nPrzegrałeś " + lost + "\nZresmisowałeś " + draw + " ");