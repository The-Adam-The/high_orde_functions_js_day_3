const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//map
const map_output = myNumbers.map(x => x * 2);
console.log(map_output);

//filter 
const filter_output = myNumbers.filter(element => element % 2 === 0);
console.log(filter_output);

//reduce
const sum = numbers.reduce((runningTotal, number) => {
        return runningTotal + number;  
});
