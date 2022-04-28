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
            result.push((`<img src="https://placehold.jp/16/ffffff/000000/150x50.png?text=${word}"/>`))
        })
    }

    let imgs = document.querySelectorAll('main.content > img')
    let r = Math.floor(Math.random() * imgs['length'])

    console.log(imgs[r])

    imgs[r].addEventListener('click', () => {
        alert('ntm');
    })
})