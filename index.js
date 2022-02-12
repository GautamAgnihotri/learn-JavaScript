// starting JS -->

// Data Type
// var let const

var a;

a=10;
console.log(a);
console.log(typeof a);

a="Hello World";
console.log(a);
console.log(typeof a);

a=true;
console.log(a);
console.log(typeof a);

a=null;
console.log(a);
console.log(typeof a);

//Number
var num = 10;
console.log(num);
console.log(typeof num);
var float = 2.4
console.log(float);
console.log(typeof float);

// string
// '',"",``
//single quotes,double quotes , backticks
var str = 'a';
console.log(typeof str);
str = "How you doing ?\n I want to print in next line"
console.log(str);

var b=` using backtick we write string in 
multilines these is second line`

console.log(b);

// write variable in string
var n = 4500;
console.log(`half of ${n} is ${n/2}`);
// ------------------------------------------------------------------------------------------
// var has some problem

//1.] Redeclaration is allowed
var r = "hello";
console.log(r);

var r= 100;
console.log(r);

//overcome ke liye

//let is used
// let support reinitialization but rediclaration is not supported
// let l =20;
// console.log(l);

// let l= 100;
// console.log(l);
// syntax ERROR :Identifier 'l' has already been declared

// const variable

//it does not support both redeclaration and reinitialization
const bcon=2;
console.log(bcon);

// const bcon=3; SyntaxError: Identifier 'bcon' has already been declared
//bcon=3; TypeError: Assignment to constant variable.


// 2nd problem with var keyword
// var is function scope or we access var anywhere globally 
// let is block scope we cant access outside block
// ex:
var num = 10
for( var i=0; i<num;i++){
    if(i%2==0){
        let hellolet =200;
        var hello = 100;
        console.log(i);
    }
}
console.log("value of i is"+i);
console.log(hello);
// console.log(hellolet); Error: hellolet is not define

// --------------------------------------------------------------------------------------

//loops in js
var num = 10;
for (var i =0; i < num; i++) {
    if(i%2==0){
        console.log(`${i} is even`);
    }
    
}
