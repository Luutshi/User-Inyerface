window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.submit').addEventListener('click', () => {
        if (parseInt(document.querySelector('input').value) === 8055) {
            window.location.replace("/defused");
        } else {
            document.querySelector('input').value = '';
        }
    })

    setTimeout(() => {
        alert('t')
    }, localStorage.getItem('duration'))

    setInterval(() => {
        localStorage.setItem('duration', localStorage.getItem('duration') - 1000)
    }, 1000)
})