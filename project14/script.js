// sincorance laguage  sequencly code run 
//settimeout = delay
//setinterval = controller loop , per sec hello print hoga 

/*let btn = document.querySelector('button')
let h5 = document.querySelector('h5')
let count = 0
btn.addEventListener('click',function(){


   if(count == 0){
h5.innerHTML = "Request Sending..."
count=1
btn.innerHTML= 'Adding..'
btn.style.backgroundColor = "#8ca7b2"
    setTimeout(() => {
        h5.innerHTML = "Friends"
count=1
btn.innerHTML= 'Remove Friend'
btn.style.backgroundColor = "#108c0e"
      
    },2000);

    }else if(count==1){
h5.innerHTML = "Removing Friend..."
btn.innerHTML= 'Remove..'
count = 0

setTimeout(() => {
     h5.innerHTML = "Stranger"
btn.innerHTML= 'Add Request'
}, 1000);
       

    }

 })
 */
    
/*setInterval(()=>{
    console.log("hello");
    
},1000)*/

let btn = document.querySelector('button')
let process = document.querySelector('.process')
let h5 = document.querySelector('h5')
let grow = document.querySelector('.grow')
let i = 1
let count = 0
btn.addEventListener('click',()=>{

    if(count == 0){
let stop = setInterval(()=>{
    h5.innerHTML =`${i++}%`
    grow.style.width = i + '%'

},50)
count = 1 
setTimeout(()=>{
clearInterval(stop)
btn.innerHTML = 'Downloaded'
},5000)

    }else if(count=1){ 
        btn.innerHTML = 'downloaded'
    }


})







