let keybords = document.querySelector('.keybords .keys')
let allkeys = []

function highlightKey(key) {
    let pressedKey = document.querySelector(`[data-key="${key}"]`);

    if (!pressedKey) return;

    pressedKey.classList.add("active");
    setTimeout(() => {
        pressedKey.classList.remove("active");
    }, 150);
}

keybords.addEventListener('click',()=>{
    


    
})