// Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds.

// const wait = (num) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//             if(num = !NaN) {
//                 resolve();
//             } else {
//                 reject()
//             }
//         }, num);
//     });
// };
// console.log(wait(1000));
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// const data = fetch('https://swapi.co')
// Promise.all([data])
//     .then(function(data) {
//
// })
//     .catch(function(error) {
//
// });

//==================== Promise.resolve() ===================
// Promise.resolve('one'.then((one) => {
//     console.log(one);
//     return 'two';
// }).then((two) => {
//     console.log(two);
//     return'three';
// }).then((three) => {
//     console.log(three);
// }))

// const getGitUsername = function() {
//     fetch('https://developer.github.com/v3/activity/events/#list-events-performed-by-a-user',
//         { headers:
//                 {'Authorization': 'githubToken'}
//
//             })
// }

// /users/:username/events/public

function getGithubUsername(name) {
    return fetch(`https://api.github.com/users/${name}/events/public`,
        {
            headers:
                {'Authorization': `token ${githubToken}`}
        })
    .then(response => response.json())
    .then(users => users.filter(function (objects) {
        return objects.type === "PushEvent"
    }))
        .then(obj => console.log(obj))

    };


getGithubUsername("Alexander-Ahrens")




// // console.log(githubToken);
// getGithubUsername().then((usernames) => {
//     console.log('hello');
//
//     usernames.forEach((username) => {
//         // do something with each username
//     });
// }).catch(error => console.error(error));
//
// console.log();

