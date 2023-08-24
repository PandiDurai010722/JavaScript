//Array Methods

//Map
//Reduce
//filter
//ForEach 
//Join 
//Push 
//Pop
//Splice 
//toString 
//Shift 
//Unshift
//find 
//findIndex 
//Concat
//Every
//Values






// The built - in array methods in JavaScript:


// At = The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
const arr1 = ["Durai", { name: "Pandi" }, 52, 12]
console.log("At() Method of Array")
console.log(arr1[2]);
console.log(arr1.at(2));
console.log(arr1.at(-3));

//     concat(): The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. 
const arr2 = [1, 2, 3, 4];
const arr3 = [5, 6, 7, 8];
const arr4 = [9, 10, 11, 12]
const arr5 = arr2.concat(arr3, arr4);
console.log("Concat() Method of Array")
console.log(arr5);

console.log("Spread Operator")
const arr6 = [0, ...arr2, ...arr3, ...arr4]
console.log(arr6)


// copyWithin(): Copies a sequence of elements within the array to the position starting at the target index.

// entries(): Returns an iterator object that contains the key - value pairs
// for each index in the array.
const arr7 = [1, 2, 3, 4, 5];
const iterator = arr7.entries();
console.log("entries()")
console.log(iterator)
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);


// every(): The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 
const arr8 = [8, 7, 8, 8, 10];
const arr9 = [];

arr8.forEach(a => {
    if (a > 6) {
        return arr9.push(a)
    }

})
console.log(arr9)
console.log("every()")

const isLessthan6 = arr8.every((a) => a > 6);
console.log(isLessthan6)


// fill(): Fills all the elements in an array with a static value.

// filter(): Creates a new array with all elements that pass a certain test.
const arr11 = [33, 34, 50, 51, 70];
const test1 = arr11.filter((a => a > 50));
console.log("filter")
console.log(test1);

// find(): Returns the value of the first element in an array that passes a certain test.
const arr10 = [1, 25, 3, 4, 3, 9];
const test = arr10.find((a => a > 4));
console.log("find()")
console.log(test);


// findIndex(): Returns the index of the first element in an array that passes a certain test.
const arr12 = [9, 34, 543, 3490, 35];
const test2 = arr12.findIndex((a => a > 500));
console.log("findIndex()");
console.log(test2);
// flat(): Creates a new array with all sub - array elements concatenated into it recursively up to the specified depth.

// flatMap(): Creates a new array with the results of calling a provided

// function on every element in the array, and then flattening the result by one level.

// forEach(): Calls a

// function
// for each element in the array.

// includes(): Determines whether an array includes a certain element.
const arr13 = [1, 354, 35, 69, 78];
console.log("includes()");
console.log(arr13.includes(9));

// indexOf(): Returns the first index at which a given element can be found in the array, or - 1
// if it is not present.
const arr14 = [45, 23, 89, 79, 23];
console.log("indexOf")
console.log(arr14.indexOf(23));

// join(): Joins all elements of an array into a string.
const obj = { name: "Guvi" };
const obj1 = [21, 878];
console.log(obj1.toString())
console.log(obj.toString())
console.log("Join()")
const arr = ["Guvi", [23, 56], 52, 12];
console.log(arr.join(" "));
console.log(arr.join());
console.log(arr.join(""))


// keys(): Returns an iterator object that contains the keys
// for each index in the array.
const arr15 = [23, 45, 75, 68];
console.log("keys");
console.log(arr15.keys())
const tes = arr15.keys();
console.log(tes.next().value);
console.log(tes.next().value);
console.log(tes.next().value);
// lastIndexOf(): Returns the last index at which a given element can be found in the array, or - 1
// if it is not present.
const arr16 = [38, 78, 29, 37, 38];
console.log("lastIndexOf")
console.log(arr16.lastIndexOf(38));

// map(): Creates a new array with the results of calling a provided
const arr17 = [2, 4, 5, 6, 7, 8];
console.log("map()")
console.log(arr17.map(a => a * 2))
console.log(arr17)

// function on every element in the array.

// pop(): Removes the last element from an array and returns that element.
const arr19 = [12, 38, 76, 83];
console.log("pop()");
console.log(arr19);
console.log(arr19.pop());
console.log(arr19);

// push(): Adds one or more elements to the end of an array, and returns the new length of the array.
const arr18 = [2, 3489, 9830, 238];
console.log("push()")
console.log(arr18);
arr18.push(123);
console.log(arr18);

// reduce(): Applies a function against an accumulator and each element in the array to reduce it to a single value.
const arr21 = [2, 3, 4, 6, 8, 9];
console.log("reduce()")
const ans2 = arr21.reduce((acc, cur) => {
    acc = acc * cur;
    return acc;

}, 10);
console.log(ans2)
console.log(arr21);

// reduceRight(): Applies a

// function against an accumulator and each element in the array(from right to left) to reduce it to a single value.

// reverse(): Reverses the order of the elements in an array.
const arr20 = [1, 2, 3, 45, 65];
console.log("reverse()")
console.log(arr20.reverse());
// shift(): Removes the first element from an array and returns that element.
const names = ["Tamil", "Guvi", "Zen", "Test"];
console.log('Shift()')

console.log(names.shift());
names.shift();
console.log(names);


// slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end(end not included).
const names1 = ["Pandi", "Durai", "SivaThivilan", "Aruna"];
console.log("slice()")
console.log(names1.slice(1));
console.log(names1.slice(0, 4));
console.log(names1.slice(-1))
console.log(names1.slice(1, -1))
console.log(names1)
    // some(): Checks if at least one element in the array passes a certain test.
const arr22 = [1, 23, 35, 76, 85, 65];
console.log('Some()')
console.log(arr22.some((a) => a > 20));
console.log('every()')
console.log(arr22.every((a) => a > 20));


// sort(): Sorts the elements of an array.

// splice(): Adds or removes elements from an array.
const names3 = ["Aruna", "Sivathivilan", "Pandidurai", "Thivies"];
// console.log(names3.slice((2)));
// console.log(names3.slice(2, 3));
// console.log(names3.slice(3, 4));
// console.log(names3.slice(3));
// console.log(names3.slice(0, 2))
// console.log(names3.slice(-3, -2))
// console.log(names3.length)
// console.log(names3.slice(1, 4))
// console.log(names3.slice(0, 4))
const months = ['Jan', 'March', 'April', 'June'];
months.splice(3, 0, "may");
months.splice(1, 0, "feb");
// months.splice(5)
// months.splice(5, 5);
months.splice(6, 0, "sum");
console.log(months)

// toLocaleString(): Returns a string representing the array.

// toString(): Returns a string representing the array.

console.log(months.toString())

// unshift(): Adds one or more elements to the beginning of an array, and returns the new length of the array.

// values(): Returns an iterator object that contains the values for each index in the array.
const ar = [1, 2, 3, 5, ];
const ar1 = ar.values();
console.log(ar1.next());
console.log(ar1.next());
console.log(ar1.next());


// Object Methods


// entries =>{key,value}

const user = {
    name: "Guvi",
    age: 20,
    city: "Alangulam"
}

console.log(Object.entries(user)); //output=>[['name','Guvi'],['age',20],['city','Alangulam']]
console.log(Object.keys(user)); //output=>['name','age','city']
console.log(Object.values(user)); //output=>['Guvi','20','Alangulam']

// keys => keys
// values => values

const numbers = [1, 2, 3, 4, 5];
const eIt = numbers.entries();
for (const it of eIt) {
    console.log(it)
}

const KIt = numbers.keys();

for (const kt of KIt) {
    console.log(kt)
}


// Recall leason


// var => Can Reasine and Redecalre 
var name = "Guvi";
name = "Test";
var name = "Ane";
name = "Tamil"
console.log(name);

// let=>  Can Reasine but can't Redecalre

let name1 = "Aruna";
name1 = "pandi";
console.log(name1);

// Const=> Can't Reasine also Redecalre

const name2 = "SivaThivilan";
// name2 = "Thivies"; can't Reasine
// const name2// through error can't Redecalre
console.log(name2);

//block Scoping
function print() {
    if (true) {
        var tr = "Guvi";
    }
    console.log(tr);
}
print();

// spread Operators

//Spread => Object and array

const ob1 = { name: "Guvi" };
const ob2 = {
    ...ob1
};

ob2.name = "Zen";
console.log(ob1.name);
console.log(ob2.name);


const arrr1 = [25, 845, 464, 848];
const arrr2 = [12, 42, 53, 43];
const arrr3 = [100, ...arrr2, 100, ...arrr1];

arrr3.push(987);
console.log(arrr2);
console.log(arrr3);

//Rest parameter

const sum = (...num) => console.log(num.reduce((acc, num) => acc + num))



sum(10, 20, 30, 40, 50);
sum(2, 4, 6, 8);
sum(1, 2, 3);

//Array & Object  Destructure



const {
    nam,
    age
} = {
    nam: "Guvi",
    age: 20,
    city: "Chennai"
};
console.log(nam, age)


const ari = [{ name: "Guvi", age: 20 }, { name: "Zen", age: 30 }, { name: "Test", age: 40 }]

console.log(ari.map(({ name }) => name));


// const name10 = ary[0];
// const name20 = ary[2];    => Old Method
// console.log(name10);
// console.log(name20);

const [name10, name20, _, name40] = ["Tamil", "Xrn", "Guvi", "Test"];
console.log(name10, name20, name40);

//Object property Shorthand

const ob = { name: "Sivathivilan" }
console.log(ob.name)
console.log(ob["name"]);

// Template literals=> new line adding string  ; concat

const great = `Hello tamil
how are you`
console.log(great)

const fName = "Tamil";
const lname = "Durai";

console.log(`${fName} ${lname} ${Lname="da"}`)