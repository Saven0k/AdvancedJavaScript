document.querySelector('.button').addEventListener('click', () => {
    const inputName = document.querySelector('.name').value
    const inputText = document.querySelector('.text').value
    localStorage.setItem(inputName, inputText)
    alert("Информация добавлена")
    window.location.href = 'http://127.0.0.1:5500/Promise/homework/second.html';
})
