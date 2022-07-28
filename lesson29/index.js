// program to count the number of keys/properties in an object

// const student = { 
//     name: 'Anna',
//     age: 33,
//     hobbies: ['reading', 'games', 'coding'],
// };

// let count = 0;

// for(let key in student) {

//     ++count;
// }

// console.log(count);


let array = ['1', '2', '1', '3', '2'];

let uniqueArray = [];
array.forEach((c) => {
    if (!uniqueArray.includes(c)) {
        uniqueArray.push(c);
    }
});

console.log(uniqueArray);