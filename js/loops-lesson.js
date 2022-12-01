let iteration = 0;
while (iteration < 10) {
    console.log(`While Loop #${iteration + 1}`);
    iteration++;
}

iteration = 0;
do {
    console.log(`Do-While Loop #${iteration + 1}`);
    iteration++;
} while (iteration < 10);

for (let i = 0; i < 10; i++) {
    console.log(`For Loop #${i + 1}`);
}

//loop through an array, and print the string in each item in a sentence
let array = ["oranges", "apples", "tomatoes", "pears", "grapes", "pineapples"];
for (let i = 0; i < array.length; i++){
    //console.log(`${array[i]} are friggin' awesome!`);
}

for (let i = 0; i < array.length; i++) {
    if (array[i] === 'tomatoes') {
        console.log(`I FOUND TOMATOES!`);
        continue;
    }
    fruitMessage(array[i]);
}

function fruitMessage(input){
    console.log(`${input} are friggin' awesome!`);
}