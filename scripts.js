
let namezxc = "Joe";
let zxc = 0;
while(zxc < 2) {
    document.write("Happy Birthday to you.<br>");
    zxc = zxc + 1;
}
document.write("Happy Birthday dear " + namezxc + ",<br>");
document.write("Happy Birthday to you.<br>");
//----------------------------------------------------

const SPENDING_THRESHOLD = 222;
const TAX_RATE = 0.09;
const PHONE_PRICE = 98.98;
const ACCESSORY_PRICE = 8.888;

var bank_balance = 305.93
var amount = 0

function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

while (amount < bank_balance) {
    amount = amount + PHONE_PRICE;
    if (amount < SPENDING_THRESHOLD) {
        amount = amount + ACCESSORY_PRICE
    }
}

amount = amount + calculateTax (amount);
console.log("Ваша покупка:" + formatAmount(amount));

if(amount > bank_balance) {
    console.log("Вы не можете позволить себе эту покупкую :(");
}