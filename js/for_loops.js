// function showMultiplicationTable(number) {
//     for (var i = 1; i < 11; i++) {
//         console.log(i + " x " + number + " = " + (i * number));
//     }
// }
// showMultiplicationTable(7);

//
// // for (var i = 1; i < 11; i++) {
// //     console.log("7 x " + i + " = " + (7 * i));
// // }
//
//
// function randOddEven() {
//     for (var i = 1; i <= 10; i++) {
//         var randRumber = Math.floor(Math.random() * 181) + 20;
//         if (randRumber % 2 === 0) {
//             console.log(randRumber +  " is even ");
//         } else {
//             console.log(randRumber + " is odd ");
//         }
//     }
// }
// randOddEven();
//
//
//
//     for(var i = 1; i < 10; i++) {
//         var num = "";
//         for(var j = 0; j < i; j++) {
//         num = num + i;
//         }
//         console.log(num);
// }

//
//
// for (var i = 100; i >= 5; i = i - 5) {
//     console.log(i);
// }


var number = Math.floor((Math.random()* 50) + 1);
console.log("Random odd number to skip is " + number);

for(var i = 1; i < 100; i++) {
    if(i % 2 === 0) {
    continue;
    }
    if (number === i) {
        console.log("Yikes! skipping number " + i);
    } else {
        console.log("Here is an odd number: " + i);
    }
    if (i >= 49) {
        break;
    }
}
