window.addEventListener('DOMContentLoaded', () => {
    let words = [ 
        'GjqJB3wo_H',
        's%WNw*K54h',
        'lF@2bb1CUQ',
        'hoxjjxM51o',
        'pcKuC5?85g',
        'V2G+COwuBQ',
        'Hq$8kI!yM=',
        'D2dr%k*h1z',
        'S@5PJsgIaQ',
        'EgmO0_TeDt',
    ];

    let result = []

    for (let i = 0; i < 10;i++) {
        words.forEach((word) => {
            let color1 = Math.floor(Math.random()*16777215).toString(16);
            let color2 = Math.floor(Math.random()*16777215).toString(16);
            result.push((`<img src="https://placehold.jp/16/${color1}/${color2}/150x50.png?text=${word}"/>`))
        })
    }


    result = result.sort(() => Math.random() - 0.5)
    console.log(result.join(''))
    let imgs = document.querySelectorAll('main.content > img')
    let r = Math.floor(Math.random() * imgs['length'])

    let countClick = 0;
    imgs.forEach((img) => {
        img.addEventListener('click', () => {
            if (img === imgs[r]) {
                alert('yo')
            }
            countClick++
            alert(`Click numéro : ${countClick}`)
        })
    })
    imgs[r].style.border = "1px solid red"

    setTimeout(() => {
        alert('t')
    }, localStorage.getItem('duration'))

    setInterval(() => {
        localStorage.setItem('duration', localStorage.getItem('duration') - 1000)
        console.log(localStorage)
    }, 1000)
})