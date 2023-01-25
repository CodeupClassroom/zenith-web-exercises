import { evenOrOdd, helloWorld } from './util.js';
import * as $ from './jquery.js';

const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];
let otherUsers = [
    {
        name: 'Abcde',
        email: 'abcde@gmail.com',
        languages: ['html', 'css', 'javascript']
    },
    {
        name: 'Billyjoebob',
        email: 'abcde@gmail.com',
        languages: ['html', 'css', 'javascript']
    },
    {
        name: 'Nicholas Cage',
        email: 'abcde@gmail.com',
        languages: ['html', 'css', 'javascript']
    }
];

// Spread operator
// let newUserArray = [
//     ...users,
//     ...otherUsers
// ];
// let numbers = [1, 2, 3, 13, 27, 4, 13];
//console.log(Math.max(...numbers));

// let obj1 = {
//     a: 1,
//     b: 2
// };
// let obj2 = {
//     c: 3,
//     d: 4
// }
// let obj3 = {
//     ...obj1,
//     ...obj2
// };
// console.log(obj3);

//console.log(newUserArray);

// Object structuring shorthand
// let name = "codeup";
// let age = 4;
// const person = {
//     name,
//     age
// }

// Object destructuring shorthand
const person = { name: 'codeup', age: 4 };
// let personKeys = Object.keys(person);
// console.log(personKeys);
let {name, age} = person;
let html = `
    <h1>${name}</h1>
    <p>${age}</p>
`;

// console.log(name);