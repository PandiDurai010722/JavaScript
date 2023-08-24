// primitive data
var name = "Guvi"; //  String
//declaration=intialation
name = 34;
var age = 20; //Number
var age1 = "20"; //String
var price = 12.569; // Number
var isActive = true; //Boolean


console.log(name);
console.log(age);
console.log(age1);
console.log(price);
console.log(isActive);

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(age1));
console.log(typeof(price));
console.log(typeof(isActive));
console.log(typeof(isActive));

// Trivial Data

var name2 = null;
var name3;

console.log(name2);
console.log(name3);


console.log(typeof(null));
console.log(typeof(name3))


// Composite (Object)

//Object
//Array
//Function

// Object

var Student = {
    name: "Guvi",
    age: "20",
    price: 120,
    isActive: true,
    phonenum: [8754108622, 9976773262]
};

console.log(Student)

console.log(Student.age);
Student.name = "Pandi";
console.log(Student);
Student.city = "Chennai";
console.log(Student);
delete Student.city;
console.log(Student);
Student["name"] = "Aruna"

var test = "age";
Student[test] = 66;
console.log(Student)

console.log(typeof(Student))

// Dot operator 
// of Operator


// Array

var student = ["Guvi", 23, 23.56, true, { name: "Pandi" },
    [34, 34]
]

console.log(student);

console.log(student[0]);
console.log(student[4].name);
student[0] = "Zen";
console.log(student);
student[4].city = "Alangulam";
console.log(student);





//  Copy by value
var str1 = 25;
var str2 = str1;
console.log(str2)

str2 = 27;

console.log("1",
    str1);
console.log(str2);


//  Copy by reference
var obj1 = { name: "Guvi" };
var obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2.name = "Zen";

console.log(obj1);
console.log(obj2);

obj1.name = "TEST";
console.log(obj1);
console.log(obj2);

vararray  = [1, 2, 3];
var array1 = array;

console.log(array); //[1,2,3]
console.log(array1); //[1,2,3]

array1[1] = "TEST";

console.log(array); //[1,"TEST",3]
console.log(array1); //[1,"TEST",3]

array[0] = "GUVI";

console.log(array); //['GUVI','TEST',3]
console.log(array1); //['GUVI','TEST',3]