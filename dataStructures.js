// level {1/2/3}

//  level 1
//1 Convert [1, 2, 3] to [2, 3, 4] using one line of code.
// Output should be [2, 3, 4]

let x = [1, 2, 3];
x.shift()
x.push(4);
console.log(x);

// 2. Calculate total of all the numbers in array [1, 2, 3] using one line of code.
// Output should be a number: 6

const sum = [1, 2, 3].reduce((add, a) => add + a ,0);
console.log(sum);

// 3 Print all the properties of the object along with value {name: 'Elie', rank: 'Pro'}.
// Output should be a string: "name: Elie, rank: Pro"

const obj = {name: 'Elie', rank: 'Pro'};
const myJson = JSON.stringify(obj);
