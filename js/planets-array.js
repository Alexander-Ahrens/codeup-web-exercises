(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    //------------------------------------ ADD THE SUN ------------------------------------//

    planets.unshift("The Sun");

    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    //------------------------------------ ADD PLUTO ------------------------------------//

    planets.push("Pluto");

    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    //------------------------------------ REMOVE THE SUN ------------------------------------//

    planets.shift("The Sun");

    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    //------------------------------------ REMOVE PLUTO ------------------------------------//

    planets.pop("Pluto");

    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);

    //------------------------------------ FIND AND LOG INDEX OF EARTH ------------------------------------//

    var index = planets.indexOf("Earth");

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(index);
    //------------------------------------ REVERSE ORDER ------------------------------------//

    planets.reverse();

    console.log("Reversing the order of the planets array.");
    console.log(planets);

    //------------------------------------ SORTING PLANETS ------------------------------------//

    planets.sort();

    console.log("Sorting the planets array.");
    console.log(planets);
})();
