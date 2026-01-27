let main = document.querySelector('.main')
let btn = document.querySelector('button')

btn.addEventListener('click', () => {
     
    let img = document.createElement('img')
    let x = Math.floor(Math.random() * 100)
    let y = Math.floor(Math.random() * 100)
    let rotate = Math.floor(Math.random() * 360)

    img.setAttribute('src', 'img1.png')

    img.style.height = '200px'
    img.style.position = 'absolute'
    img.style.top = y + '%'
    img.style.left = x + '%'
    img.style.rotate = rotate + 'deg'

    main.appendChild(img)
    console.log(img);

})