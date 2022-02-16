const myNumbers = [1, 2, 3, 4, 5];

// for (const number of myNumbers) {
//     console.log(`This is number ${number}.`)
// }

//callback functions
const ourForEach = function (array, callback) {
    for (const element of array) {
        callback(element);
    }
};

ourForEach(myNumbers, function(number) {
    console.log('this number is', number);
});

//enumerators