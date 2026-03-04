let totalPrice = 80;

if (totalPrice >= 100) {
    let discountedprice = totalPrice * 0.7;
    console.log(discountedprice);
} else { 
 let amountneeded = 100 - totalPrice;
console.log(`Utrať ještě ${amountneeded} Kč, abyste získali slevu.`);
}