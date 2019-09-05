"use strict";

// /**
//  * Write your solutions here
//  */
// ## Problems
//
// You may modify the HTML attributes and include jQuery in the project to help you solve the problems below.
//
// 1. When the button with the id of `change-bg-color` is clicked the background of
// the page should turn blue.

function set_background() {
    document.getElementById("change-bg-color").style.backgroundColor = "blue";
}

// 2. When the button with an id of `append-to-ul` is clicked, append an li with
//     the content of `text` to the ul with the id of `append-to-me`.

$("#append-to-ul").click(function(){
    $("ul").append("<li>List</li>");
});


//     [Demo](examples/ul-append.gif)
// 3. Two seconds after the page loads, the heading with the id of `message` should
// change it's text to "Goodbye, World!".

$('#message').animate({'opacity': 0}, 2000, function(){
    $(this).html('Goodbye, World!').animate({'opacity': 1}, 2000);
});


//     [Demo](examples/goodbye-world.gif)
// 4. When a list item inside of the ul with the id of `hl-toggle` is first
// clicked, the background of the li that was clicked should change to
// yellow. When a list item that has a yellow background is clicked, the
// background should change back to the original background.

var clicked = true;
$(document).ready(function(){
    $("li").click(function(){
        if(clicked){
            $(this).css('color', 'yellow');
            clicked  = false;
        } else {
            $(this).css('color', 'black');
            clicked  = true;
        }
    });
});

//     [Demo](examples/hl-items.gif)
// 5. When the button with the id of `upcase-name` is clicked, the element with the
//     id of `output` should display the text "Your name uppercased is: " + the
// value of the `input` element with the id of `input` transformed to uppercase.

$("#input").click(function(){
    $("#output").toUpperCase().val("Your name uppercase is: ");
});

//     [Demo](examples/upcase-name.gif)
// 6. Whenever a list item inside of the ul with the id of `font-grow` is _double_
// clicked, the font size of the list item that was clicked should double.

$(".fnt-dbl").on({
    dblclick: function(){
        $(this).css("font-size", "2em");
    }
});

//     [Demo](examples/font-grow.gif)
// ## Grading
// Each problem is worth 1 point. A point will be awarded if your `index.html` file
// can be opened and the behavior in the demo gifs reproduced.
