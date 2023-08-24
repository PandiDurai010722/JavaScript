// Template literals

const message = `dfaskjkjkjgasdhgkfhs
sdfsdff`;
console.log(message)


const fname = "Pandi Durai";
const lname = "Sorimuthu";
const a = 12;
const b = 24;
const test = [1, 2, 3, 4];
const obj = { name: "guvi", age: 24 }


const fullname = `Hello ${fname} ${lname} ${a+b}
city- Alangulam`

console.log(fullname)
console.log(`Hello ${fname} ${lname} ${a+b} ${test} ${obj}
city- Alangulam`)


// New Line
// Variable -${Variable}

const obj1 = {
    name: "Guvi",
    age: 27
}

console.log(obj1)

console.log(typeof(test))

const fun = () => {}

let arr1 = [1, 2, 3, 4, ];
let arr2 = [2, 4, 6, 8, 10];
arr2 = arr2.concat(arr1);

console.log(arr2);
console.log(arr1);


const object = {
    name: "Guvi",
    age: 12
}

object.__proto__ = {
    printGuvi: function() {
        console.log("Pandi")
    }
}

object.printGuvi();

// object.__proto__ = null;

object.printGuvi();

const array10 = [1, 2, 3, 4, 5];
// array10.__proto__ = null;

array10.forEach(a => console.log(a));

const ob1 = {
    name: "Guvi",
    age: 30
}

const ob2 = {
    name: "Zen",
    age: 40
}


Object.prototype.printGu =
    function() {
        console.log("ArunaPandi")
    }


ob1.printGu();
ob2.printGu();

const student1 = {
    firstName: "Tamil",
    lastName: "S",
    printName: function() {
        console.log(`${this.firstName}${this.lastName}`)
    }
}

const student2 = {
    firstName: "Guvi",
    lastName: "Zen",
    printName: function() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

student1.printName()
student2.printName()


//  Parant,Super,Base
class Person {
    constructor(fname, lname, ) {
        console.log("Constructor Called");
        this.firstName = fname;
        this.lastName = lname;

    }
    printName = function() {
        console.log(`${this.firstName}${this.lastName}`)
    }
}


// Child,Sub,Derived
class Student extends Person {
    constructor(firstName, lastName, course) {
        super(firstName, lastName)
        this.course = course
    }
}

class Mentor extends Person {
    constructor(firstName, lastName, course, batch) {
        super(firstName, lastName)
        this.course = course
        this.batch = batch
    }
}

class OldStudent extends Person {
    setCourse(course) {
        this.course = course;
    }
}

class person {
    constructor(data) {
        this.first = data.firstName;
        this.last = data.lastName;
    }
    print3 = () => console.log(`${this.first}${this.last}`)
}

class Interviewer extends person {
    constructor(data) {
        super(data);
        this.batch = data.batch
    }
}

const Student1 = new Student("Pandi", "Aruna", "MERN");
const Student2 = new Student("Aruna", "Pandi", "FSWD");
const Mentor1 = new Mentor("Tamil", "Sekar", "MERN", "B34");
const OldStudent1 = new OldStudent("Siva", "Thivilan")
OldStudent1.setCourse = "DSA";
const Interviewer1 = new Interviewer({ firstName: "Abdul", lastName: "Muthalif", batch: "B34" })
console.log(Student1);
console.log(Student2);
console.log(Mentor1)
console.log(OldStudent1);
console.log(Interviewer1);
Student1.printName();
Student2.printName();
Mentor1.printName();
OldStudent1.printName();
Interviewer1.print3();