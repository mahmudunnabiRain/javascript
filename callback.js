function add(a,b) {
    return a+b;
}

function multiply(a,b) {
    return a*b;
}

function calculate(num1, num2, callback) {
    if (typeof callback === "function")
        return callback(num1, num2);
}

console.log(calculate(2, 3, multiply))

console.log(calculate(18, 8, function(a, b) { //anonymous function
    return a-b;
})) 


let myArray = [{
    num: 5,
    str: "Apple"
}, {
    num: 3,
    str: "Banana"
}, {
    num: 4,
    str: "Orange"
}]

myArray.sort(function(val1, val2) { //callback anonymous function
    if(val1.num > val2.num)
        return 1;
    if(val1.num < val2.num)
        return -1;
    else
        return 0;
});

console.log(myArray);
