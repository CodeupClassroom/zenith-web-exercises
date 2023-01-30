"use strict";

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


const threeOrMoreLangs = users.filter(u => u.languages.length >= 3);
// console.log(threeOrMoreLangs);

// Use .map to create an array of strings where each element is a user's email address

const emails = users.map(u => u.email);

// console.log(emails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalExperience = users.reduce((totalYears, user) => {
    totalYears += user.yearsOfExperience;
    return totalYears;
}, 0);

// console.log(totalExperience / users.length);


// Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce((longEmail, user) => {
    if (user.email.length > longEmail.length) {
        longEmail = user.email;
    }
    return longEmail;
}, '');

// console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// going further to
const userNames = users.reduce((str, user) => {
    str += `${user.name[0].toUpperCase()}${user.name.slice(1)}, `;
    return str;
}, 'Your instructors are: ').slice(0, -2) + '.';

console.log(userNames);