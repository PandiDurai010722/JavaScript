//Frontend<=> Backend <=> Database
// Netlify     Heroku       Mongo Atlas


// Variables
// var<name> =<value>


var user = [1, "asdas", {},
    [],
    true,
    null,
    undefined
]

var user = {
    name: "Guvi",
    "age": 12
}

console.log(typeof("Guvi")); // String
console.log(typeof(1)); // number
console.log(typeof(true)); //boolean
console.log(typeof({})) // object
console.log(typeof([])) //object 
console.log(typeof(function test() {})); // function
console.log(typeof(null)) // object
console.log(typeof(undefined)) // undefined


// Armatic operator

//  + => Addition
//  - => Subtraction
//  * => Multiplication
//  / => Diviton  // quation
//  % => Reminder



console.log(1 + 2);
console.log(3 - 1);
console.log(4 * 3);
console.log(10 / 4);
console.log(10 % 4);
console.log(5 ** 2);
console.log(5 ** 3);

//Increment Operator
var i = 10;
console.log(++i); // Pre Increment 
console.log(i)
    // Decrement Operator

var j = 20;

// j--
console.log(--j);
console.log(j);


var m = 1;
//i=i+1;
i++;
i += 4; //(i=i+4);
//  Asinement operator =

var k = 1;
k = k + 1;
console.log(k);
k += 2;
console.log(k);
k++;
console.log(k);

// for (initialization; conditon; iterator)

for (var m = 1; m < 10 && m % 2 == 10; m++) {
    console.log(m)
}

var l = 0;
while (l < 10) {
    console.log(l);
    l++
}

//for in loop

var test = [12, 34, 54]
for (var i in test) {
    console.log("for in loop")
    console.log(test[i])
} //only print index position if you want the index value also get it. and also for in loop used to print  object key  


var obj = {
    name: "SivaThivilan",
    age: 1
}

for (var j in obj) {
    console.log(j, obj[j])
}

// for of loop

for (var k of test) {
    console.log(k)
} // only print value of array also used to array data type.


//  do while 
var u = 1

do {
    console.log(u)
    u++;
}
while (u <= 10)


// if else

var h = 1;

if (h <= 1) {
    console.log("less then Number or equal")
} else {
    console.log("greater then Number")
}

// comparative Operators

//  >      -Greater then
//  >=     -Greater then Equal To
//  <      -Less Than
//  <=     -Less Than Equal To
//  ==     -Value Check(No Deep Check)
//  ===    -Value and Type Check (Deep Check)
//  !=     - Not Equals value Check
//  !===   - Not Equals Type check


//  if else 
var v = 1;

if (v != 1) {
    console.log(v)
} else {
    console.log("Guvi")
}

var c = true;

if (c != true) {
    console.log(c)
} else {
    console.log("Fail")
}

var q = false;
if (q != true) {
    console.log(q)
} else { console.log("fail") }


// ------------------------------------------------

for (var e = 1; e < 10 && e % 2; e++) {
    console.log("hello",
        e);
}
//while loop
var c = 0;

while (c < 10) {
    console.log(c);
    c++
}

// do while
var x = 1;
do {
    console.log(x)
    x++
} while (x <= 10)

// if

var o = 1;
if (o !== 1) {
    console.log("Greater then")
} else {
    console.log("Guvi")
}

var b = true;
if (b != false) {
    console.log(b)
} else {
    console.log("pandi")
}

var c = 4;

if (c == 1) {
    console.log("One");
} else if (c == 2) {
    console.log("Two")
} else if (c == 3) {
    console.log("Three")
} else { console.log("Else") }


var pon = 4;

if (pon >= 10 && pon < 5) {
    console.log("One");
} else(console.log(false))


var en = 25;
if (en >= 5 || en <= 10) {
    console.log(en)
}

//  Type Conversion

var test = '1256';
console.log(+test);
console.log(typeof(+test))

//  Number()



var test1 = "2353";
console.log(test1);

test1 = Number(test1);

console.log(test1);
console.log(typeof(test1));

// String()

test1 = String(test1);
console.log(typeof(test1))

//Boolean()

var boolean = "asdf ;lkj"
console.log(typeof(boolean));
boolean = Boolean(boolean);
console.log(typeof(boolean));

// parseInt()

var num2 = "25345.021";
console.log(typeof(num2));
num2 = parseInt(num2);
console.log(num2)
console.log(typeof(num2));

//parseFloat
var num3 = "2538.23";
console.log(typeof(num3));
num3 = parseFloat(num3);
console.log(num3);
console.log(typeof(num3));

// Number()
var num4 = "452.25"
console.log(typeof(num4));
num4 = Number(num4)
console.log(typeof(num4));


//Named Function
function printGuvi() {
    if (false) {
        return "Guvi"
    } else {
        return "Pandi"
    }
}
console.log(printGuvi());
//Anonyomous Function

var printGuvi1 = function() {
    console.log("Guvi1")
}
printGuvi1()
    // Arrow Function
var printGuvi2 = () => console.log("Guvi2")
printGuvi2()

var printGuvi3 = _ => console.log("Guvi3")
printGuvi3();
// IIF Function
(function print() {
    console.log("Guvi4")
})();

(() => console.log("Guvi5"))()
// Generator Function
function* printword() {
    console.log("Guvipandi");
}
printword().next();

function* ArimaticOps(num1, num2) {
    yield num1 + num2;
    yield num1 - num2;
    yield num1 * num2;
    yield num1 / num2;
    yield num1 % num2;
    yield num1 ** num2;
}
var aops = ArimaticOps(25, 50);
console.log("Sum", aops.next().value);
console.log("Difference", aops.next().value);
console.log("Product", aops.next().value);
console.log("Divition", aops.next().value);
console.log("Percentage", aops.next().value);
console.log("Root", aops.next().value);

// Ternary Operator
// ()?:

function pandi() {
    return (true) ? "Guvi" : "Zen";
}
console.log(pandi())


function high(numb = 5) {
    // var numb = 10;
    return (numb > 5) ?
        (numb > 2) ?
        "GreaterThen 2" :
        "Lesser Than2" :
        "Lesser"

}

console.log(high(10));


// JSON- Javascript Object Notation
