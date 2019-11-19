// // function isNumeric(input) {
// //     if (input === true || input === false || input === null) {
// //         return false;
// //     } else return !isNaN(input);
// // }
// // console.log();
// //
// //
// // function isEqual(input, input2) {
// //     if (input == input2) {
// //         return true;
// //     } else;
// // }
// //
// // function isIdentical(input, input2) {
// //     if (input === input2) {
// //         return true;
// //     } else;
// // }
// //
// // function not(input) {
// //     return !input;
// // }
//
// function isOdd(input) {
//     if (input === isNumeric() && input === 2 % 0) {
//         return input;
//     } else return "This number is odd.";
// } console.log(3);
//
// // Make a function named isNumeric(input) that returns if the input is a number like 5 or 2.3 or a string containing only a number like "2". Example isNumeric(3) is - true. isNumeric("banana") should return false.
//
//
// // function isNumeric(input) {
// //     return !isNaN(parseFloat(input));
// // }
// // console.log(isNumeric("23"));
//
// //     Make a function named isEqual(input1, input2) that returns if both inputs have the same value. areEqual
//
// // function isEqual(input1, input2) {
// //     return input1 == input2;
// // }
// // console.log(isEqual(0, 2));
//
// // Make a function named isIdentical(input1, input2) that returns if both inputs are same value and data type.
//
// // function isIdentical(input1, input2) {
// // return input1 === input2;
// // }
// // console.log(isIdentical(1, 1));
// //
//
// //     Make a function named not(input) returns the input with a flipped boolean.
//
// //     function not(input) {
// //         if(input === true){
// //             return false;
// //         }else {
// //             return true;
// //         }
// //     }
// // console.log(not(false));
//
// // Make a function named isOdd(number) that returns true if the number is odd
// //
// //     function isOdd(num) {
// //     if(num % 2 === 1) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// //     }
// //     console.log(isOdd("7"));
//
// // Make a function named isEven(number) that returns true if the number is even or zero
//
// // function isEven(num) {
// //     if(num % 2 === 0) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // }
// // console.log(isEven(0));
//
// // Make a function named isPositive(number) that returns true if the provided input is a positive number. False for zero or any other number or data type.
//
// //     function isPositive(num) {
// //     if ( parseInt(num) > 0) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// //     }
// // console.log(isPositive(2));
//
// //     Make a function named isNegative(number) that returns true if the provided input is a negative number. False for zero or any other number or data type.
//
//
//
// // function isNegative(number) {
// //     if (typeof number === "string") {
// //         return false
// //     } else if(number < 0) {
// //         return true;
// //     }
// //         }
// //         console.log(isNegative("-4"));
//
// //     Make a function named identity(input) that returns the input exactly as provided.
// //
// // function idenity(input) {
// //     return input;
// // }
// // console.log(idenity(34));
//
// //     Make a function named isFive(input)
//
// // function isFive(number){
// // return number === 5;
// // }
// // console.log(isFive("5"));
//
// // Make a function named addFive(input) that adds five to some input.
// //
// // function addFive(number){
// //     if( typeof number === "string"){
// //         return false;
// //     } else{
// //         return number + 5;
// //     }
// // }
// // console.log(addFive("5"));
//
// //     Make a function named isMultipleOfFive(input)
//
// // function isMultipleOfFive(number){
//
// //  Make a function named isThree(input)
//
// // function isThree(number){
// // return number === 3;
// // }
// // console.log(isThree(2));
//
// // Make a function named isMultipleOfThree(input)
//
// // function isMultipleOfThree(number) {
// // return (number % 3 === 0);
// // }
// // console.log(isMultipleOfThree(3));
//
// // Make a function named isMultipleOfThreeAndFive(input)
//
// // function isMultipleOfThreeAndFive(input) {
// //     return (isMultipleOfThree(input) || isMultipleOfFive(input));
// // }
// // console.log(isMultipleOfThreeAndFive(2));
//
// // Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
//
// //     function isMultipleOf(target, n) {
// //     return (target % n === 0);
// //     }
// // console.log(isMultipleOf(10,2));
//
// // Make a function named isTrue(boolean)
//
// // function isTrue(input) {
// //     return input === true;
// // }
// // console.log(isTrue(true));
//
// // Make a function named isFalse(boolean)
//
// // function isFalse(input) {
// // return input === false;
// // }
// // console.log(isFalse(true));
//
// // Make a function named isTruthy(input) // remember that values other than true will behave like true. you may need to lookup truthy/falsy values in JavaScript
//
// // Make a function named isFalsy(input) // remember that values other than false behave like false
//
//
// // Make a function named isVowel(letter)
//
// //
// // function isVowel(letter) {
// //     return ['a', 'e', 'i', 'o', 'u'].indexOf(letter.toLowerCase()) !== -1
// // }
// //
//
// // - Make a function named isNumeric(input) that returns if the input is a number like 5 or 2.3 or a string containing only a number like "2". Example isNumeric(3) is - true. isNumeric("banana") should return false.
//
// function isNumeric(input) {
//     return parseFloat(input);
//
// }
// isNumeric("7");
//
// // - Make a function named isEqual(input1, input2) that returns if both inputs have the same value. areEqual
//
// function isEqual(input1, input2) {
//     return (input1 == input2);
// }
// isEqual();
//
// // - Make a function named isIdentical(input1, input2) that returns if both inputs are same value and data type.
//
// function isIdentical(input1, input2) {
//     return (input1 === input2);
// }
//
// // - Make a function named not(input) returns the input with a flipped boolean
//
// function not(input) {
//     return !==input;
// }
//
// // - Make a function named isOdd(number) that returns true if the number is odd
//
// function isOdd(number) {
//     return number % 2 === 1;
// }
//
// // - Make a function named isEven(number) that returns true if the number is even or zero
//
// function isEven(number) {
//     return number % 2 === 0;
// }
//
// // - Make a function named isPositive(number) that returns true if the provided input is a positive number. False for zero or any other number or data type.
//
// function isPositive(number) {
//     if(number >= 0){
//         return true;
//     }else {
//         return false;
//     }
// }
//
// // - Make a function named isNegative(number) that returns true if the provided input is a negative number. False for zero or any other number or data type.
//
// function isNegative(number) {
//     if(number < 0){
//         return true;
//     }else{
//         return false;
//     }
// }
//
// // - Make a function named identity(input) that returns the input exactly as provided.
//
// function identity(input) {
//     return input;
// }
//
// // - Make a function named isFive(input)
//
// function isFive(input) {
//     if(input === 5){
//         return true;
//     }
// }
//
// // - Make a function named addFive(input) that adds five to some input.
//
// function addFive(input) {
//     return input + 5;
// }
//
// // - Make a function named isMultipleOfFive(input)
//
// function isMultipleOfFive(input) {
//     if(input / 5 === 0){
//         return true;
//     }
// }
//
// // - Make a function named isThree(input)
//
// function isThree(input) {
//     return input === 3;
// }
//
// // - Make a function named isMultipleOfThree(input)
//
// function isMultipleOfThree(input) {
//     if(input / 3 === 0){
//         return true;
//     }
// }
//
// // - Make a function named isMultipleOfThreeAndFive(input)
//
// function isMultipleOfThreeAndFive(input) {
//     if(input / 3 === 0 && input / 5 === 0){
//         return true;
//     }
// }
//
// // - Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
//
// function isMultipleOf(target, n) {
//     if (target / n === 0){
//         return true;
//     }
// }
//
// // - Make a function named isTrue(boolean)
//
// function isTrue(boolean) {
//     return boolean === true;
// }
//
// // - Make a function named isFalse(boolean)
//
// function isFalse(boolean) {
//     return boolean === false;
// }
//
// // - Make a function named isTruthy(input) // remember that values other than true will behave like true. you may need to lookup truthy/falsy values in JavaScript
//
// function isTruthy() {
//
// }
