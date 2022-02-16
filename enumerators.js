//enumerators
const myNumbers = [1, 2, 3, 4, 5];

//Syntax #1
myNumbers.forEach(function(number)  {
    console.log(`This is number ${number}.`);
})

//Syntax #2 with =>
myNumbers.forEach(number => {
    console.log(`This is number ${number}.`);
})

//Syntax #2 with => showing index
myNumbers.forEach((number, index) => {
    console.log(`This is number ${number} at index ${index}.`);
})

// With Return statement
const multiplyByTwo = function (numbers) {
    const result = [];
    myNumbers.forEach((number) => {
        const multiplied = number * 2;
        result.push(multiplied);
    })
    return result;
};
console.log(multiplyByTwo(myNumbers));


// refactored return with map()
const result = myNumbers.map((number) => {
    return number * 2;
 });
console.group(result);