const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let newLang = users.filter((user) => user.languages.length >= 3);
    console.log(newLang);

let emailArr = users.map((address) => address.email.toString());
console.log(emailArr);

let totalYears = users.reduce((total, number) => {
    return total + number.yearsOfExperience / users.length;
}, 0);
console.log(totalYears);

let longestEmail = users.reduce((emailAddress, emailLength) => {
    return emailAddress.length > emailLength.email ? emailAddress : emailLength; //if (longestEmail.length < emailLength.email.length) { longestEmail = user.email; } return longestEmail;})
});
console.log(longestEmail);

// const allInstructors = () => {
//     let instructorNames =
//         users.reduce((finalString, person) => finalString +=
//             `${person.name}, `, "");
//     temp = `Your instructors are: `;
//     instructorNames.substring(0,
//         (instructorNames.length - 2));
//     return temp + `${person.name}.`;
//
// };
// console.log(allInstructors);

let instructors = users.reduce((sentence, user, i) => {
    if (i < users.length - 1) {
        sentence += user.name + ", ";
    } else {
        sentence += `and ${user.name}.`
    }
    return sentence;
}, "Your instructors are: ");
console.log(instructors);


//======================= BONUS =======================//

// const uniqueListOfLangs = users.reduce((listOfLangs, user) => {
//     for (const lang of user.languages) {
//         if (listOfLangs.indexOf(lang) === -1) {
//             listOfLangs.push(lang);
//         }
//     }
//     return listOfLangs
// }, []);
// uniqueListOfLangs;

let listOfLanguages = users.reduce((accumulator, user) => {
    user.languages.map(language => accumulator.push(language));
    return accumulator;
}, []);

console.log(listOfLanguages);