//JSON - JavaScript Object Notation

function printWith(data) {
    console.log("Hi", data)
}


printWith("Guvi");
printWith(20);
printWith("City");

function sum(num, num1) {
    return num + num1
}

console.log(sum(5, 10))
    // sum(10, 15);
    // sum(9, 9);


// Function
//A JavaScript function is a block of code designed to perform a particular task.

//document

// console.log(window);
//for,for in, for of, forEach

// for loop
var test = [1, 2, 3, 4, 5];

for (var i = 0; i < test.length; i++) {
    console.log("for loop")
    console.log(test[i]);
}

// for in loop=> array and object index
for (var i in test) {
    console.log("for in loop")
    console.log(test[i]);
}


var student = { name: "Guvi", age: 21 };
for (var i in student) {
    console.log(i, student[i])
}


// for of 

for (var i of test) {
    console.log("for of")
    console.log(i);
}

// forEach
[1,2,3,5]
test.forEach((val, index) => { console.log("forEach"), console.log(val,index) });
test.forEach(console.log);


var da = `[
  {
    "id": 1,
    "name": "Leanne Graham",
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
  }]`
console.log(typeof(da));
da = JSON.parse(da);
console.log(typeof(da));
// console.log(da);

da.forEach(da => console.log(da.name))

function de(da) {
    console.log(da.name)
}
da.forEach(de);