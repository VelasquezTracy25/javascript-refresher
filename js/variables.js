let date = new Date();
//new date object

let firstName = "Tracy",
    lastName = "Velasquez";

let inStock;
let shipping;

console.log("date is:" + date)


let quantity;
quantity = 4;
let lowStock = (quantity <= 5);
let lowStockMessage = "Order Soon! There are only 5 of this shirt left!"


// One way
if (lowStock) {
    console.log("Order Soon! There are only 5 of this shirt left!")
}

// Alt way
function lowStockChecker() {
    if (lowStock) {
        return lowStockMessage;
    }
}

console.log(lowStockChecker());

let itemPrice = 600;
let taxCalc = itemPrice * 0.0825;

function calculateTax() {
    return taxCalc;
}

let total = itemPrice + calculateTax();

console.log("Your tax is: " + calculateTax());
console.log("Your total is: " + total);