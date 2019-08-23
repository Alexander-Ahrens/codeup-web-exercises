(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Alexande",
        lastName: "Ahrens"
    };
//    console.log("This person's name is " + this.firstName + " " + this.lastName);
    console.log(person.firstName);
    console.log(person.lastName);

    console.log("");

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        return "Hello, " + this.firstName + " " + this.lastName + "! How are you today?";
    };
    console.log(person.sayHello());;

    console.log("");

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // If shoppers buy groceries that have a cost greater than $200 dollars, then they get a 12% discount (amount * .12)
    //

    var shoppers = [
        {name: 'Cameron', amount: 180},    //name and amount are properties.
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper) {
        if (shopper.amount >= 200) {
            var saved = shopper.amount * .12;
            var discount = shopper.amount - (shopper.amount * .12);
            console.log(("Hello " + shopper.name + "! Your original maount was " + shopper.amount + ". Your discount was 12%. " +
                "Your total after your discount is $" + discount));
        } else {
            var amountNeededForDiscount = 200 - shopper.amount;
            console.log(("Sorry, " + shopper.name + ", no discount for you. If you spend $" +
                amountNeededForDiscount + ", you could get that sweet 12% off. You owe us $" + shopper.amount));
        }
    })


     // for (var i = 0 ; i < shoppers.length; i++) {
     //     if (shoppers[i].amount < 200) {
     //         console.log(shoppers[i].name + " paid " + shoppers[i].amount + ".")
     //     } else (console.log(shoppers[i].name + " paid " + (shoppers[i].amount - (shoppers[i].amount * .12))));
     // }

    console.log("");

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // Common Sense - Thomas Paine
    // Rasputin: Faith, Power, and the Twilight of the Romanovs - Douglas Smith
    // The Martian - Andy Weir
    // 1984 - George Orwell
    // Dracula - Bram Stoker
    // Strange Case of Dr. Jekyll and Mr. Hyde - Robert Stevens

    var books = [
            {
                title: "Common Sense",
                author: {
                    firstName: "Thomas",
                    lastName: "Paine"
                }
            },

            {
                title: "Rasputin: Faith, Power, and the Twilight of the Romanovs",
                author: {
                    firstName: "Douglas",
                    lastName: "Smith"
                }
            },

            {
                title: "The Martian",
                author: {
                firstName: "Andy",
                lastName: "Weir"
                }
            },

            {
                title: "1984",
                author: {
                firstName: "George",
                lastName: "Orwell"
                }
            },

            {
                title: "Dracula",
                author: {
                    firstName: "Bram",
                    lastName: "Stoker"
                }
            },

            {
                title: "Strange Case of Dr. Jekyll and Mr. Hyde",
                author: {
                    firstName: "Robert",
                    lastName: "Stevens"
                }
            },

        ];
    books.forEach(function(book, i) {
        console.log("Book # " + (i + 1));
        console.log("Title:  " + book.title);
        console.log("Book # " + book.author.firstName + " " + book.author.lastName);
        console.log("---")
    })
    // console.log(books[0].title);
    // console.log(books[0].author.firstName);
    // console.log(books[0].author.lastName);
    // console.log("------");
    //
    // console.log(books[1].title);
    // console.log(books[1].author.firstName);
    // console.log(books[1].author.lastName);
    // console.log("------");
    //
    // console.log(books[2].title);
    // console.log(books[2].author.firstName);
    // console.log(books[2].author.lastName);
    // console.log("------");
    //
    // console.log(books[3].title);
    // console.log(books[3].author.firstName);
    // console.log(books[3].author.lastName);
    // console.log("------");
    //
    // console.log(books[4].title);
    // console.log(books[4].author.firstName);
    // console.log(books[4].author.lastName);
    // console.log("------");
    //
    // console.log(books[5].title);
    // console.log(books[5].author.firstName);
    // console.log(books[5].author.lastName);
    // console.log("------");
    //
    // console.log("");

    // var books = {};

    // books.title = "Common Sense";
    // books.firstName = "Thomas";
    // books.lastName ="Paine";
    //
    // books.title = "Rasputin: Faith, Power and the Twilight of the Romanovs";
    // books.firstName = "Douglas";
    // books.lastName = "Smith"
    //
    // books.title = "The Martian";
    // books.firstName = "Andy";
    // books.lastName ="Weir";
    //
    // books.title - "1984";
    // books.firstName = "George";
    // books.lastName = "Orwell";
    //
    // books.title - "Dracula";
    // books.firstName = "Bram";
    // books.lastName = "Stoker";
    //
    // books.title - "Strange Case of Dr. Jekyll and Mr. Hyde";
    // books.firstName = "Robert";
    // books.lastName = "Stevens";


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // for (i = 0 ; i < books.length; i++) {
    //     console.log("Book # " + books[i]);
    //     console.log("Title: " + books[i].title);
    //     console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName)
    //     console.log("---");
    // }

    books.forEach(function(element, index) {
        console.log("Book # " + (index + 1));
        console.log("Title: " + element.title);
        console.log("Author: " + element.author.firstName + " " + element.author.lastName);
        console.log("------");

    });

    console.log("");

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     *
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

        function createBook(bookTitle, authorName) {
        var book = {
                title: bookTitle,
                author: {
                    firstName: authorName.split(" ")[0],
                    lastName: authorName.split(" ")[1]
                    }
                };
            return book;
            }

    console.log(createBook("bookTitle", "author name"));


       function showBookInfo(book) {
           console.log(createBook("bookTitle", "author name"));
       }

       books.forEach(function(book, i) {
           console.log("Book # " + (i + 1));
           showBookInfo(book);
    })
})();
