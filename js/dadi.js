alert("Sto tirando due dadi.")
const rndNumOne = parseInt(Math.random() * (6 - 1) + 1);
const rndNumTwo = parseInt(Math.random() * (6 - 1) + 1);

alert("Dado 1: " + rndNumOne + "\nDado 2: " + rndNumTwo);

if (rndNumOne == rndNumTwo) {
    alert("Pareggio.");
} else if (rndNumOne > rndNumTwo) {
    alert("Il dado con la faccia n° '" + rndNumOne + "' è il vincitore");
} else {
    alert("Il dado con la faccia n° '" + rndNumTwo + "' è il vincitore");
}


