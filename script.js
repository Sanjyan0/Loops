// Number for Sum of first 'n' numbers
let nForSum = 10; 
let sumOfN = 0;
for(let i = 1; i <= nForSum; i++) {
    sumOfN += i;
}
console.log(`Sum of first ${nForSum} numbers is: ${sumOfN}`);

// Number for multiplication table
let nForTable = 5; 
console.log(`\nTable of ${nForTable}:`);
for(let i = 1; i <= 10; i++) {
    console.log(`${nForTable} x ${i} = ${nForTable * i}`);
}


let mainNumber = 153; 
console.log(`\nEx - Number :- ${mainNumber}`);

// 1. Find sum of all digits
let tempForDigits = mainNumber;
let sumOfDigits = 0; 
while (tempForDigits > 0) {
    let lastDigit = tempForDigits % 10;
    sumOfDigits += lastDigit;
    tempForDigits = Math.floor(tempForDigits / 10);
}
console.log(`Sum of its digits: ${sumOfDigits}`);

// 2. Check if it is an Armstrong number
let tempForArmstrong = mainNumber;
let armstrongSum = 0;
while (tempForArmstrong > 0) {
    let digit = tempForArmstrong % 10;
    armstrongSum += (digit * digit * digit); // Raised to power 3
    tempForArmstrong = Math.floor(tempForArmstrong / 10);
}
let isArmstrong = (armstrongSum === mainNumber) ? "Yes" : "No";
console.log(`Is it an Armstrong number? ${isArmstrong}`);

// 3. Check if it is a prime number
let isPrime = "Yes";
if (mainNumber <= 1) {
    isPrime = "No";
} else {
    for (let i = 2; i <= Math.sqrt(mainNumber); i++) {
        if (mainNumber % i === 0) {
            isPrime = "No";
            break;
        }
    }
}
console.log(`Is it a prime number? ${isPrime}`);

// 4. Print all its factors
let factors = [];
for (let i = 1; i <= mainNumber; i++) {
    if (mainNumber % i === 0) {
        factors.push(i);
    }
}
console.log(`Factors: ${factors.join(', ')}`);