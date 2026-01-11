var main = document.querySelector('main');
var btn = document.querySelector('button');
let h1 = document.querySelector("h1")
var arr = ["nice dream ", "nice to meet you", "you can do it", "god", "hero", "nice dream ", "nice to meet you", "you can do it", "god", "hero"]
var arr1 = [
    {
        name: "hero",
        primarycolor: "#db4e4e",
        backgroundcolor:" #7c7e76",
    },
    
    {
        name: "hero1",
        primarycolor: "#f6cf0e",
        backgroundcolor: "#202320",
    },

    {
        name: "hero2",
        primarycolor: "#e01212",
        backgroundcolor: "#313a31"
    }

]
btn.addEventListener('click', function () {
    let num = Math.floor(Math.random() * arr1.length)
    let winner = arr1[num]
    h1.innerHTML = winner.name
    h1.style.color = winner.primarycolor
    h1.style.backgroundColor = winner.backgroundcolor
})
















