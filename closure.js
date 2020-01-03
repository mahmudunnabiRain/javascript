
function addTo(passed) {
    return function(inner) { //inner function
        return passed+inner;
    }
}

let addTwo = addTo(2);
let addThree = addTo(3);

console.log(addTwo(3));
console.log(addThree(3));