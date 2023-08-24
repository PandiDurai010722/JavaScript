//Named function

function sum(a, b) {
    return a + b;
}

console.log(sum(10, 5))



// Anonymous Function 

var sum1 = function(a, b) {
    return a - b;
}

console.log(sum1(20, 5))


// Arrow function


var product = (a, b) => { return a * b }
var quotient = (a, b) => a / b

console.log(product(20, 10));
console.log(quotient(50, 10));

var print = _ => console.log("Guvi");
print("Zen");

var divition = (a = 10, b = 50) => {
    return a / b
}

console.log(divition(20, null));
console.log(divition(undefined, undefined))


var dif = function(a = 50, b) {
    if (a > b) {
        return a - b
    } else {
        return b - a
    }
}

console.log(dif(undefined, 60))

// Generator function -ES6


function* print1() {
    console.log("Yielding Guvi")
    yield "Guvi"
    console.log("Yielding Zen")
    yield "Zen";
    console.log("Yielding Test")
    yield "Test"
}

console.log(print1().next().value)
// var test = print1();
// console.log(test);
// console.log("Before Yielding Guvi");
// console.log(test.value);
// console.log(test.next().value);
// console.log("Before Yielding Zen");
// console.log(test.next().value);
// console.log("Before Yielding Test");
// console.log(test.next().value);


function* arithmetic(a, b) {
    console.log("Sum");
    yield a + b;
    console.log("Difference");
    yield a - b;
    console.log("Multiply");
    yield a * b;
    console.log("Divition");
    yield a / b;
}

var test1 = arithmetic(10, 20);
console.log(test1.next().value);
console.log(test1.next().value);
console.log(test1.next().value);
console.log(test1.next().value);


//IIF- Immediately Invoked Function

(function() { console.log("Guvi") })();

(() => console.log("Arasan"))();