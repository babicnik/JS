let podminka = !false; 

podminka = true && true;

podminka = false || true; 

console.log(podminka)

// Podmínka pře if

let number = 10;
let message; 

if (number > 0) {
    message = "kladné číslo";
} else {
    message = "není kladné";
}

console.log(message);

let number2 = 10;
let message2 = (number2 > 0) ? "kladné číslo" : "není kladné";

console.log(message2)
