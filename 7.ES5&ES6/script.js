//var

var name = "Guvi";

// console.log(window)

let name1 = "Zen";

const name2 = "pen"
console.log(window)

var name3 = "Pandi";

if (true) {
    var name3 = "Aruna"
}

let name4 = "Sivathivilan";

if (true) {
    let name4 = "Thiviesh"
    console.log(name4);
}

console.log(name4);


//   let is Block scope


let name5 = "GuviPandi";

function setName() {
    let name5 = "ZenPandi"
}

setName();

console.log("Outsid Block", name5);

let name6 = "GuviPandi";

function setName1() {
    name6 = "ZenPandi"
}

setName1();

console.log("Outsid Block", name6);


///

var name7 = "name7";

function changeName() {
    name7 = "name7";

    name7 = "Hello" + name;

}
changeName();

console.log(name7);


var name8 = "name8";

function changeName1() {
    var name8 = "name8";
    name8 = "hello" + name8
    return name8
}

console.log(changeName1());
console.log(name8);


// variable hoisting

name9 = "Gvui"; //window.name="Gvui";

var name9; // window.name =undefined

console.log(name9);


let name10 = "Aru";

function getName() {
    let name10 = "Arukutti"
    console.log(name10)
}

getName();
console.log(name10);

//  var name or name


// function get() {
//     let name11 = "Thiviutti";
//     console.log(name11);
// }
// get(); //Zen
// console.log(name11) //Zen;


function print() {
    if (true) {
        var test = "Goovu"
    }
    console.log(test)

}

print()


//  var Redeclare/ Reintialize/Global scope

//let -Blcok Scope Not Redclare but Reassingn

//const-Block Scope/Not Redclare /Not Reassign


function con() {
    if (true) {
        const test = "sdh";
        console.log(test);
    }
    const test = "sdd";
    console.log(test)
}

con();

// Spread Operator(only use Array and object)

var obj = { name: "Guvi", age: 20 }
var obj2 = {...obj, age: 12 } //Object.assign({ city: "alm", age: 34 }, obj); //({target},source)
obj.name = "Zen"
console.log(obj.name);
console.log(obj2.name);
console.log(obj);
console.log(obj2);

var obj3 = { city: "Chennai", pincode: 5655 };
var obj4 = { name: "Zen", age: 20 };
var obj5 = {...obj3, ...obj4, age: 15 }

console.log(obj5)


var obj6 = { name: "Thivilan", age: 1 }
var obj7 = Object.assign(obj3, Object.assign(obj6, { age: 2 }))
console.log(obj7)


//Array

var arr1 = [1, 2, 3, 4];
var arr2 = [...arr1]

arr1[0] = 10;

function sum(name, ...ar) {
    console.log(name)
    let sum = 0;
    ar.forEach(a =>
        sum += a)
    return sum;
}



console.log(sum("Guvi", 10, 25, 55, 76, 77, ));


// Array and Object Destructuring


//Object Destructuring

var User = {
    name: "Guvi",
    age: 21,
    city: "Chennai"
}

var { name: UName, age: Uage, city: UCity } = User
// var name = User.name;
// var age = User.age;
// var city = User.city;
console.log(UName, Uage, UCity);


var Jdata = [{
        "id": 1,
        "name": "Leanne Graham",
        "Phone": [9976773262, 8754108622],
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "Phone": [8754108622, 9659116643],
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]



Jdata.forEach(({ name: Uname, website: Uweb }) => {
    console.log(Uname), console.log(Uweb)
})

Jdata.forEach(({
    name,
    Phone: [_, num2],
    email,
    address: { geo: { lat } },
    company: { bs }
}) => {
    console.log(name, num2, email, lat, bs)
})

var arda = [
    [1, 2, 3], //0
    [4, 5, 6] //1
]

arda.forEach(([firEle, secondEle]) => {
    // var firEle = u[0];
    // var secondEle = u[1];
    console.log(firEle, secondEle)
})

const arr = [1, 2, 3, 4, 5];

const fEle = arr[0];
const SEle = arr[1];
console.log(fEle, SEle);

const countries = [{
    name: "India",
    flag: ["asdf", "asdfjs"]
}, {
    name: "USA",
    flag: ["asdfdas", "trewt"]
}]

countries.forEach(({ flag: [fir, second] }) => {
    console.log(fir, second)
})


const num = [
    [1, 2, 4],
    [5, 6, 7]
]

console.log(num[1][2])
num.forEach(([_, second]) => { console.log(second) })