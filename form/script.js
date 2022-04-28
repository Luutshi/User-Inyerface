window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.submit').addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelectorAll('form > input').forEach((input) => {
            input.value = '';
        })
    })

    setTimeout(() => {
        alert('t')
    }, localStorage.getItem('duration'))

    setInterval(() => {
        localStorage.setItem('duration', localStorage.getItem('duration') - 1000)
    }, 1000)
})