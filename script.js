function add(a,b,c) {
    return a+b+c;
}
console.log(add(2,8,10));



//  objects
var Menu ={
    Pizza : 1,
    Burger : 2,
    coco : 3,
}
console.log(Menu);



// arrays
var arr=[1,2,"neeny",4,5]
console.log(arr)



// console
console.log("Nilam Prajapati");
console.warn("This is warning");
console.error("This is an error")



// opareters
var x=50;
var y=50;
console.log("x+y = ",x+y)
console.log("x-y = ",x-y)
console.log("x*y = ",x*y)
console.log("x/y = ",x/y)



// condition
var age= 36
if (age<18) {
    console.log("you can't drive")
}else{
    console.log("you can drive")
}



// loops
var array =[1,2,3,4,5,6,7,8]
for (let i = 0; i < array.length; i++) {
     console.log(array[i]);
}
// array.forEach(function(element){
//     console.log(element);
// });

var demo = document.getElementById("demo");
var btn = document.getElementById("btn");
var container = document.getElementById("container");

 btn.addEventListener("click" , ()=> {
 document.getElementById("demo").innerText = "i am changed"
});



// events
container.addEventListener("mouseover",function(){
    console.log("mouse over")
});
container.addEventListener("mouseout",function(){
    console.log("mouse out")
});



//  styling in js
container.style.fontFamily = "sans-serif";
btn.style.fontSize = "20px";
btn.style.border ="purple 2px solid";
btn.style.background = "pink";



let mydate =new Date();
console.log(mydate)
