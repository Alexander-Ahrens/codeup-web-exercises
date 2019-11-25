
function isNotANumber() {
    if (x.isNaN() || y.isNaN()) {
        console.log(x + " is not a number");
    }
}

function add (x, y) {
    x = 0;
    y = 0;
    var z = x + y;
}
add();

function subtract(x, y) {
    x = 0;
    y = 0;
    var z = x - y;
}
subtract();

function multiply(x, y) {
    var z = x * y;
}
multiply();

function divide(x, y) {
    if (y === 0) {
        console.log("ERROR: Cannot divide by zero. Try again.");
    } else {
        var z = x / y;
    }
divide();


}