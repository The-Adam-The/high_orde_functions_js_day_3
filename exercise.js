//1) Write a function called getEvens that takes an array of numbers as an argument and returns a new array that only contains the even numbers from the original array.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const showEvenElements = function(numbers) {
    const result = [];
    numbers.forEach((number) => {
        if (number % 2 === 0) {
            result.push(number);
        }
    })
    return result;
};
console.log(showEvenElements(myNumbers));

// refactored with filter()
const showEvenElements = (numbers) => {
    const evenNumbers = numbers.filter((number) => {
        return number % 2 === 0;
    })
    return evenNumbers;
};
console.log(showEvenElements(myNumbers))  


//2) Write a function called sumElements that takes an array of numbers as an argument and returns the sum total of all the elements in the array.
const sumElements = numbers => {
    let result = 0;
    numbers.forEach(number => {
        result += number;
    })
    return result;
};
console.log(sumElements(myNumbers));

// refactored with reduce()
const sumElements = numbers => {
    const sum = numbers.reduce((runningTotal, number) => {
        return runningTotal + number;
    }, 1)
    return sum;
};
console.log(sumElements(myNumbers));

//Hint: If you get stuck, start by writing the function using a for of loop, then refactor, replacing the for loop with the forEach.

