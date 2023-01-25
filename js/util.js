export function evenOrOdd(n){
    return (n % 2 === 0) ? 'even' : 'odd';
}

export function helloWorld(name = "Jason") {
    console.log(`Hello, ${name}!`);
}