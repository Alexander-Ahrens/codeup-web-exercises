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

function divide(x, y) {
    if (y === 0) {
        console.log("You cannot divide by zero. Try again.");
    } else {
        var z = x / y;
    }



}