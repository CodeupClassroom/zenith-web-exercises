let zenith = [
    "Said M Shah",
    "Randy Chu",
    "Leonard Karoly",
    "Nickolas Solley",
    "Chris Hilton",
    "Chase",
    "Johnny Wells",
    "Jason Crites",
    "Robert Arroyos",
    "Jiabin Pan",
    "Kenneth Hayles",
    "Songju Oh",
    "Kailan",
    "Aharown Jackson",
    "Hung Ho",
    "Horace Smith",
    "Luke Calderon",
    "Jona Gonzalez",
    "Alexia Briones Ornelas",
    "Michael-Angel Cevallos",
    "Fernando Rivera",
    "Will Perry",
    "Jeffrey Neal",
    "Titus Williams",
    "Lonnie Arellano",
    "Andre Murray",
    "Reginald Graham",
    "Ricardo Ayala",
    "Joe Michael Garcia III"
];

let myOptions = {
    class: zenith,
    size: 6,
    undersizedGroup: true
};

createGroups(myOptions);

function createGroups (input) {
    if (typeof input !== 'object') {
        console.log('You called the createGroups function with malformed parameters');
        return;
    }
    if (typeof(input.class) !== 'object') {
        console.log('Adding a class: [array] is required.');
        return;
    }
    if (typeof input.size !== 'number') {
        console.log('Adding a size: [number] is required.');
        return;
    }
    let options = {
        class: input.class,
        size: input.size,
        undersizedGroup: input.undersizedGroup ? input.undersizedGroup : false
    }
    shuffle(options.class);
    //console.log(options.class.toString());
    let groupsArr = [];
    let remainingArr;
    for(let i = 0, j = 0; i < options.class.length; i+=options.size, j++)  {
        let startPosition = (options.size * (j +1)) - options.size;
        let endPosition = options.size * (j + 1);
        let group = options.class.slice(startPosition, endPosition);
        //console.log(group);
        if (group.length == options.size) {
            groupsArr.push(group);
        } else {
            remainingArr = group;
        }
    }
    //console.log(groupsArr);
    //console.log(remainingArr);
    if (remainingArr.length > 0) {
        if (options.undersizedGroup === false) {
            for(let i = 0, j = 0; i < remainingArr.length; i++, j++) {
                if (j > (groupsArr.length -1)) {
                    j = 0;
                }
                let name = remainingArr[i];

                groupsArr[j].push(name);
            }
        } else {
            groupsArr.push(remainingArr);
        }
    }
    console.log(groupsArr);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
