window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.submit').addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelectorAll('form > input').forEach((input) => {
            input.value = '';
        })
    })

    let pixels = 100

    setTimeout(() => {
        document.querySelector(".ensemble-bas").style.bottom = `${pixels}px`;
    }, 1000)

    document.querySelector('#up').addEventListener('click', () => {
        pixels -= 1
        document.querySelector(".ensemble-bas").style.bottom = `${pixels}px`;
    })

    document.querySelector('#down').addEventListener('click', () => {
        pixels += 1
        document.querySelector(".ensemble-bas").style.bottom = `${pixels}px`;
    })

    document.querySelector('#close').addEventListener('click', () => {
        alert('ബട്ടൺ പ്രവർത്തിക്കുന്നില്ല')
    })

    setTimeout(() => {
        window.location.replace("./boom");
    }, localStorage.getItem('duration'))

    setInterval(() => {
        localStorage.setItem('duration', localStorage.getItem('duration') - 1000)
    }, 1000)
})