var main = document.querySelector('main');
var btn = document.querySelector('button');

var arr = ["Never give up.","Dream big.","Be the change.","Keep going.","Actions speak louder.","Learn from yesterday.","Stay focused.","Be yourself."];

btn.addEventListener('click', function(dets){
    var quote = arr[Math.floor(Math.random()*arr.length)];
    var x = Math.floor(Math.random()*100);
    var y = Math.floor(Math.random()*100);
    var scale = Math.floor(Math.random()*4);
    var rotate = Math.floor(Math.random()*360);
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);
    
    var h1 = document.createElement('h1');
    h1.innerHTML = quote;
    h1.style.left = x + '%';
    h1.style.top = y + '%';
    h1.style.scale = scale;
    h1.style.rotate = rotate + 'deg';
    h1.style.color = `rgb(${c1}, ${c2}, ${c3})`;

    main.appendChild(h1);
})