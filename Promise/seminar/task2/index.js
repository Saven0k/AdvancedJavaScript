const text = document.querySelector('.text')

document.querySelector('.save').addEventListener('click', () => {
    const input = document.querySelector('.input').value
    localStorage.setItem('text', input)
    alert("Данные успешно загружены")
})


document.querySelector('.clear').addEventListener('click', () => {
    localStorage.clear()
    alert("База отчищена")
})

document.querySelector('.load').addEventListener('click', () => {
    const data = localStorage.getItem('text')
    const h5 = document.createElement('h5');
    h5.textContent = data ? data : 'Введите текст';
    text.appendChild(h5);
})
