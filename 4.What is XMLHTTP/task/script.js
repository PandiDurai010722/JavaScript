//Task 1: Simple Program todo for variables 

//1.Decalre  four variables without assigning values and print them in console

var a;
var b;
var c;
var d;

console.log(a,b,c,d)


//2.How to get value of the variable myvar as output

var myvar =1;
console.log(myvar);

//3.Declare variables to store your first name, last name,marital status, country and age in multiple lines


var firstname="Pandi";
var lastname="Durai";
var maritalStatus="Married";
var country="Indian";
var age ="27"

// 4.Declare variables to store your first name, last name, marital status,country and age in a single line


var firstname="Pandi";
lastname="Durai";
maritalStatus="UNmarried";
country="Indian";
age="27"

// 6. Convert the string to integer

parseInt();

//7.Write 6 statement which provide truthy & falsey values.

//--------------------------------------------------------------


// Task 2: Simple Programs todo for Operators


//1.Square of a number

let variable =5;
let SquaredNumber2 =Math.pow(variable,2);
console.log("5*5= ", SquaredNumber2 )

//2.Swapping 2 number

var a =5;
var b =3;
[a,b]=[b,a];
console.log(a,b);


// 3. Addition of 3 number

const num1=5;
const num2=3;
const num3=2;

const sum=num1+num2+num3;
console.log(sum);


//4.Celsius to Fahrenheit conversion

function cToF(Celsius){
    var cToFahr=Celsius * 9/5 +32;
    var message =Celsius +' \xB0C is '+cToFahr+' \xB0F.';
    console.log(message);
}

cToF(60);

function FToC(Fahrenheit){
    var ftocel=(Fahrenheit-32) * 5/9;
    var message=Fahrenheit+ '\xB0F is '+ftocel+ '\xB0C.';
    console.log(message);
}

FToC(140);


// 5. Meter to miles 

var meters =2500
var miles = meters/1610;

console.log(miles);

//6. calculate Batting Average

var BATSMAN ={

    firstname: "MSDONI",
    hits:10,
    atBats:30,
    calculateAVG: function(){
        this.avg=this.hits/this.atBats;
        return this.avg;
    }
}

BATSMAN.calculateAVG();
console.log(BATSMAN.firstname+" has a batting average of "+BATSMAN.avg);


// 7. Pounds to kg

var pounds=20;


var kg= (pounds/0.45359237)

console.log(kg);

//8.Calculate simple Interest 

let P=1,
R =5,
T=1

let SI=(P*T*R)/100;
console.log("Simple Interest = " +SI);

// 11. Calculate area of an equilateral triangle formula= 1/2 bh

let h =10;
let B= 20;

let area_triangle =((1*B*h)/2);
console.log("area of an equilateral triangle",area_triangle);

// 12.Area of Isosceles Triangle formula=1/2 a^2

let a2 =10;

let Area=(1*Math.pow(a2,2))/2; 

console.log("Area ofa an Isosceles Triangle",Area);

//13. Volume of Sphere =4/3 pi*r^3

let radius= 5;
let Volume=(4/3)*Math.PI*Math.pow(radius,3);
console.log("Volume of spare = "+Volume);

//14. Volume of Prism

let length=10;
let width=5;
let height=8;

let vol =length*width*height;
console.log("volume of "+ vol);

//15.Find area of a triangle formula= 1/2 a*b*sin(c)

let A= 10;
B =7;
C=25;


area_triangle=(((a*b)*(Math.sin(C)))/2);

console.log(area_triangle);

// 16. Give the Actual cost and Sold cost, Calculate Discount Of Product 

getPrice =function(){
    var numVal1=Number("2000");//2000
    var numVal2=Number(4.27/100);//
    var totalvalue=numVal1-(numVal1*numVal2);
    console.log(totalvalue.toFixed(2));

}
getPrice();

//17.Given their radius of a circle and find its diameter,circumference and area. 2PIr2

radius_circle =10;
circle_diameter=radius_circle*2;
PI=Math.PI;
circumference_circle=2*PI*radius_circle;
console.log(circumference_circle);
