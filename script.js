window.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem('duration', 300000)

    setTimeout(() => {
        alert('t')
    }, localStorage.getItem('duration'))

    setInterval(() => {
        localStorage.setItem('duration', localStorage.getItem('duration') - 1000)
        console.log(localStorage)
    }, 1000)

})