// Vnořené podmínky
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    console.log("Vítejte na stránce.")
    if (isAdmin) {
        console.log("Přístup do panelu Admin povolen.")
    } else {
        console.log("Přístup jako uživatel povolen.")
    }
}

// Operátory 

let age = 20;
let hasDriversLicense = true;

if (age >= 18 && hasDriversLicense) {
    console.log("Můžeš řídit.");
} else {
    console.log("Nemůžeš řídit.");
}

let isHoliday = false;
let isWeekend = true;

if (isHoliday||isWeekend) {
    console.log("Je čas relaxovat.");
} else {
    console.log("Je čas pracovat.");
}