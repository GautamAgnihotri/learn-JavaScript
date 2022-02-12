// 3 types of functions

// Normal function

//function defination
//function function_name(param1,param2){
    // do somthing
//}
//function invoke
//function_name(arg1,arg2);

function add (a,b){
    console.log(a+b);
}
add(2,6);

// function are treated as first class citizens in javaScript
// --> function  can be returned
// --> function can be passed as parameters/arguments

//2. type of function
function calculator(str,a,b){
    if(str=='add'){
        return function add(){  //returning function
            console.log( a+b);
        }
    }
}
let returnFun = calculator('add',2,3);               //function Expression: we can store returned function in variable
console.log("returned function is\n"+ returnFun);  //print return function
returnFun();                                       //calling function stored in variable

//also
let sayHi=function () {
    console.log("hello this is an functionexpression");
}
console.log(sayHi);
sayHi();

//3.) IIFE-> Imediately invoke function expression
let additionIIFE = (function add2(a,b){
    console.log(a+b);
})(20,30);                       //add () at the end of function defination call function imediately