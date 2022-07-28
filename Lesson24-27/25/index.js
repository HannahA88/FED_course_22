let numberOne = prompt("input the first number");
let numberTwo = prompt("input the second number");
let smaller = 0;
let bigger = 0; 
let LCD = 0;

if (numberOne > numberTwo) {
    smaller = numberTwo;
    bigger = numberOne;
}

else {
    smaller = numberOne;
    bigger = numberTwo;
}

for (let i = 0; i <= smaller; i++) {
    if (smaller % i === 0 && bigger % i === 0) {
        LCD = i;
        console.log("LCD", LCD);
    }
}

