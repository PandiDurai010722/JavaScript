const user = {
    firstName: "Guvi",
    lastName: "Zen",
    get FullName() {
        return `${this.firstName}${this.lastName}`
    },
    set Age(age) {
        this.age = age
    }
}

console.log(user);
user.Age = 20;
console.log(user);


class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName}${this.lastName}`
    }

    set setAge(age) {
        this.age = age;
    }

}

const user1 = new User("Guvi", "Zen")
const user2 = new User("Tamil", "Sekar")
const user3 = new User("Pandi", "Durai");

console.log(user1.fullName)
user1.setAge = 50;
console.log(user2.fullName);
user2.age = 56;
console.log(user3.fullName)


// Higher Order Function
// Function that has another function  as parameter

function test1() {
    console.log("Test1....");
}
test1();

function test2(t) {
    t()
}

test2(test1)


function test3(t) {
    t()
}
test3(function() {
    console.log("TE")
})


const arr = [2, 5, 6];

function double(ele) {
    console.log(ele * 2)
}

arr.forEach(double);
arr.forEach(ele => {
        double(ele)
    })
    //  Function that returns another function
function printguvi() {
    return function() {
        console.log("Guvi")
    }
}

console.log(printguvi());

const print = printguvi();
console.log(print);
print();

//Array Method(MRF)

const array = [1, 2, 3, 4, 5];


// Map - it is always return same lenth of array with implement 

const arrayout = array.map((ele) => {
    return ele * ele
});
console.log(arrayout);


// filter


const arrop = [];

for (const i of array) {
    if (i % 2 === 0) {
        arrop.push(i)
    }
}

console.log(arrop);

const arrop2 = array.filter(ele =>
    ele % 2 == 0
)

console.log(arrop2)

// Reduce

const arrop3 = array.reduce((acc, ele) => {
    acc = acc + ele
    return acc
}, 0);

console.log(arrop3);

let max = 0;

for (let index = 0; index < array.length; index++) {
    if (array[index] > max) {
        max = array[index]
    }
}

console.log(max);

const arrop4 = array.reduce((max, ele) => {
    if (ele > max) {
        max = ele;
    }
    return max;
})

console.log(arrop4)


// real time

const UsersofInternet = [{
    firstName: "Rajini",
    lastName: "Kanth",
    age: 71
}, {
    firstName: "Kamal",
    lastName: "Hasan",
    age: 65
}, {
    firstName: "Ajith",
    lastName: "kumar",
    age: 50
}, {
    firstName: "Joseph",
    lastName: "vijay",
    age: 50
}, {
    firstName: "Surya",
    lastName: "Sivakumar",
    age: 49
}]

const fullname = UsersofInternet.map((ele => `${ele.firstName}${ele.lastName}`))

console.log(fullname)



const output = {}

UsersofInternet.forEach(({
    age
}) => {

    output[age] = output[age] ? ++output[age] : 1;
    // if (output[ele.age]) {
    //     output[ele.age] = ++output[ele.age];
    // } else {
    //     output[ele.age] = 1;
    // }
})

console.log(output);

const agecount = UsersofInternet.reduce((acc, {
    age
}) => {
    console.log(acc, age)
    acc[age] = acc[age] ? ++acc[age] : 1;
    return acc;
}, {});
console.log(agecount)

const filterage50 = UsersofInternet
    .filter(({
        age
    }) => age >= 50)
    .map(({
        firstName,
        lastName
    }) => `${firstName}${lastName}`)
    .filter(u => u.startsWith("A"))

console.log(filterage50)