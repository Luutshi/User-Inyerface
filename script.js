window.addEventListener('DOMContentLoaded', () => {
    console.log(Date())

    localStorage.setItem('duration', 300000)

    setTimeout(() => {
        alert('t')
    }, localStorage.getItem('duration'))

    setInterval(() => {
        localStorage.setItem('duration', localStorage.getItem('duration') - 1000)
    }, 1000)
})