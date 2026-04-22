function rekniAhoj(){
    console.log("Čus");

}

rekniAhoj();
rekniAhoj();

let pozdrav = "Pozdrav";

function ukazPozdrav() {
    console.log(pozdrav)
}

function testLocal(){
let localValue = 123;
console.log(localValue)
}

ukazPozdrav();
testLocal();




if(true){
    var y = "var blok nerespektuje";
}
console.log(y);

// Parametr a Argument

function test(name) { 
console.log("ahoj" + name);    
}

test("Tomáš");
test("Ema");
test(123)

function scitani(num1, num2){
    console.log(num1 + num2);
}

scitani(6,7)

function vypisCisla(zacatek, konec) {
    for (let i = zacatek;) 
}