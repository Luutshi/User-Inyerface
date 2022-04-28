window.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem('duration', 3000000)

    setTimeout(() => {
        window.location.replace("./boom");
    }, localStorage.getItem('duration'))

    setInterval(() => {
        localStorage.setItem('duration', localStorage.getItem('duration') - 1000)
    }, 1000)
})