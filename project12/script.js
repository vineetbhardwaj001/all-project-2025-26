/*

/*hoisting : javascript move the decrlation part to top before excaution   {
 console.log(a);
var a = 10;
}
// var es5 .function scoped matalb function inside the parent fnc, var self add to window object 
// const , let : es6, block scoped ,doesn't add to window object 
// undefined variable is exist per not assign the value 
// not-define variable not exist, console.log(x), //x is not declare
// primitive: number,string,boolean,symbol,undefine,null,bigint
/* reference : object, array, function , (),[],{};

let arr = [1,2,3,4,5];
let b = [...arr];
b.pop();

/* Conditional :
let age = 12;
if(age >18){
console.log("vinett");

}else if(age < 18){
console.log("hsdjfh");

}
12>11?console.log("vineet") :console.log("hey");

/* falsy: false ,0, undefine, NAN, document.all;
if(1){
console.log("hey");
true ye print ho jaye ga ;
}


/* truthy : everthings else
    if("vineet"){
console.log("hello vineet bhardwaj");
it is run true ye print vineet ko;
} 
/* for loop :
for(let i =0; i<=30; i++){
i++ : phale print hoga fir add;
++i : phale add hoga fir print;
console.log(i);

}

*/
/*for each loop : actually for each loop array me use hota hai 
let a = [1,2,3,4,5];
a.forEach(function(val){
console.log(val+10);
a = [10,20,30,40,50,];//answer
})


/* map 
let a = [1,2,3,4,5,6];
let ans = a.map(function (val){
return 
console.log(val*2)
});


// let cart = [
//   { item: "Book", price: 200 },
//   { item: "Pen", price: 50 },
//   { item: "Bag", price: 800 }
// ];
// let obj = [
//     {name : "vineet",
//     age: 21,
//     eamil : "v@gmail.com"
//     }
// ];
// let ans = cart.reduce((acc,item)=>{
// return acc + item.price;
// },0);

// function User(name,age) {

//   this.name = name;
//   this.age = age;

// }

// let u1 = new User("vineet",21);
// console.log(u1);

/*let str = "vineet"
for(let i of str){
    console.log(i);
    
}

/* duplicate remove
let arr =[1,2,2,3,3,3,3,3,];
let ans = [...new Set(arr)]; 


/* ye hai second largest number 
let arr = [1,2,33,3,4,55,6];
// let arr1 = ; // if duplicate
let ans = [...new Set(arr)].sort((a,b)=>b-a); // sort me ASD order ke liye return me a-b or DES order b-a;
console.log(ans[1]);


/* ye reverse print 
let arr = [1,2,3,4,5,5,6,5,7,9,8];
let arr1= [];
for(let i = arr.length-1;i>=0;i--){
   arr1.push(arr[i]);
   console.log(arr[i]);
   
}

*/

/* DOM 

Selector 

getElementById('box')

document.getElementsByClassName(".box")


document.getElementsByTagName

let h1 = document.querySelector("h1");

h1.innerHTML = 'hello vineet or sab tik hai'

Changing HTML
h1.innerHTML = 'hello vineet or sab tik hai'

Changing CSS 

h1.style.color ='red' 
// style is most important or css ka use karo koi bhi properties style.color = '' ;
// jab background-color in css or js me backgroundColor = '';
h1.style.backgroundColor ='red'

Event Listener

let h1 = document.querySelector("h1");

h1.addEventListener('click',function () {
    console.log("hello");
    
})

let btn = document.querySelector("button");

btn.addEventListener('click', function () {
    btn.innerHTML = 'starting...'

    btn.style.backgroundColor = 'red'
    console.log("hello");

})
    question : agar html me h1 3 ho to tum select karo ge h1 then only select first h1 if you selct all 
    then qsa(); ye sab ko selct karga per ab chnage nahi ho ga defualt me frist h1 per ho ga change agar 
    change karna hai tu tume nodeindex ka use karna ho ga [0,1,2,3..] run this code to understanding.
    
    let h1 = document.querySelectorAll('h1');
h1[0].innerHTML = 'change'

*/

/*CSS.json 
"css snippets":
    {
        "prefix" : "css",
        "body": [
            "*{",
            "   margin: 0;",
            "   padding:0;",
            "   box-sizing: border-box;",
            "   font-family: gilroy;",
            "}",
            "html,",
            "body {",
            "    height: 100%;",
            "    width: 100%;",
            "}"
        ],
        "description": "to produce the main snippet for css"
    }
*/

/*let box = document.querySelector(".box");
let btn = document.querySelector("button");

 btn.addEventListener('click', function(){
btn.innerHTML = "turn off..."
    box.style.backgroundColor = "orange";
    
 })*/

/* ye ek project 
let btn = document.querySelector("button");
let h5 = document.querySelector("h5")
let check = 0

btn.addEventListener('click', function () {

    if (check == 0) {
        h5.innerHTML = " Friend "
        h5.style.color = '#08cf62'
        btn.innerHTML = 'Remove Friends'
        check = 1
    }
    else {

        h5.innerHTML = " Stranger "
        h5.style.color = 'red'
        btn.innerHTML = 'Add Friends'
        check = 0
    }

})*/
 
// `${}` : ye template literses hai

let nv = document.querySelector(".nv");
let box = document.querySelector(".box")
let btn = document.querySelector("button");


btn.addEventListener('click',function(){

    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    let c4 = Math.floor(Math.random()*256)
    let c5 = Math.floor(Math.random()*256)
    let c6 = Math.floor(Math.random()*256)

  nv.style.backgroundColor = `rgb(${c1},${c2},${c3})`
  box.style.backgroundColor = `rgb(${c4},${c5},${c6})`
})


















