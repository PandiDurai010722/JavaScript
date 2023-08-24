//1.Do the below programs in anonymous function & IIFE

// a.Print odd numbers in an array


//Old for of Method
let Odd = [];

Odd = [445];

const oddNumber = function(array) {
    for (let odd of array) {
        if (odd % 2 !== 0) {
            Odd.push(odd)


        }

    }

    return Odd

};
// --------------------------------------------------------------
//   filter Method
const OddNumber = function(array) {
        return array.filter((a) => a % 2 !== 0)
    }
    // ----------------------------------------------------------
    //IIFE
console.log("IIFE ODD");
console.log((function(array) {
    return array.filter((a) => a % 2 !== 0)
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ------------------------------------------------------------
console.log("ODD NUMBER Use filter");
console.log(OddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log("ODD NUMBER Use for of");
console.log(oddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


//b.Convert all the strings to title caps in a string array


const strArr = function(arr) {

    arr = arr.map((n) => {
        return n.toLowerCase().split(" ")
            .map((w) => {
                return w.charAt(0).toUpperCase() + w.slice(1)
            })
            .join(' ')

    })

    return arr

}

console.log(strArr(["kamaraj", "neru", "subash chathira boss"]))


// IIFE
console.log("IIFE Title Caps");
console.log((function(stA) {
    stA = stA.map((st) => {
        return st.toLowerCase().split(" ").map((an) => { return an.charAt(0).toUpperCase() + an.slice(1) }).join(" ")
    })
    return stA
})(["kamaraj", "neru", "subash chathira boss"]));


//c.Sum of all numbers in an array


const Sum = function(arr1) {

    return arr1.reduce((acc, curva) => acc + curva)
}


console.log(Sum([3, 4, 5, 7, 8]));
// IIFE  Sum of all numbers in an array
console.log("IIFE Sum of all number in an Array")

console.log((function(sum) { return sum.reduce((acc, sum) => acc + sum) })([3, 4, 5, 7, 8]))


//d.Return all the prime numbers in an array
const primeNumber = function(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }

    }

    return true;
}
const prime = function(arr) {
    return arr.filter((nu) => primeNumber(nu))
}
console.log("primeNumber")
console.log(prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// IIFE function primeNumber;
console.log("IIFE function PrimeNumber")
console.log((function(arr) {
    return arr.filter((nu) => function(num) {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true;
    }(nu))
}([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))



//e.Return all the palindromes in an array
console.log("find palindromes old Method")

let palindromes = function(arr) {
    let palind = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let words = word.toString();
        if (words === words.split("").reverse().join("")) {
            palind.push(parseInt(words));
        }

    }
    return palind;
}

console.log(palindromes([33, 25, 77, 121, 45]));


console.log("Leatest Method  find Palindromes")

const pali = function(arr) {
    return arr.map((m) => m.toString()).map((n) => n.split("").reverse().join("")).map((n) => parseInt(n)).filter((n) => arr.includes(n));

}
console.log(pali([33, 25, 77, 121, 45]));
console.log("IIFE function")

console.log((function(arr) {
    return arr.map((m) => m.toString()).map((n) => n.split("").reverse().join("")).map((n) => parseInt(n)).filter((n) => arr.includes(n));
}([22, 33, 151, 90])))




// f.Return median of two sorted arrays of the same size.



let median = function(arr5, arr6) {

    let arr7 = arr5.concat(arr6).sort((a, b) => a - b);
    const mid = Math.floor(arr7.length / 2);
    if (arr7.length % 2 === 0) {
        return (arr7[mid - 1] + arr7[mid]) / 2
    } else { return arr7[mid] }

}

console.log(median([1, 3, 4, 5, 6, 7], [7, 8, 9, 10, 11, 12]));

console.log("IIFE function of median of two stored array")


console.log((function(arr1, arr2) {
    let arr3 = [...arr1, ...arr2].sort((a, b) => a - b);
    const mide = Math.floor(arr3.length / 2);
    if (arr3.length % 2 === 0) {
        return (arr3[mide - 1] + arr3[mide]) / 2;
    } else {
        return arr3[mide]
    }
}([1, 2, 3, 4], [5, 6, 7, 8])))

//d.Remove duplicates from an array


let duplicate = function(arr8) {
    let ans = arr8.filter((item, index) => {
        console.log(arr8.indexOf(item));
        return arr8.indexOf(item) === index
    });
    return ans;
}

console.log(duplicate([0, 1, 4, 5, 4, 5]))


// f.Rotate an array by k times