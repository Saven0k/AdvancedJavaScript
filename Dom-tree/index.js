schedule = {
    'Математика': ['12:00', '16', 1],
    'Русский язык': ['8:00', '15', 1],
    'Физика': ['9:00', '14', 1],
    'Химия': ['15:00', '11', 1],
}
const cards = document.querySelector('.cards')

for (let key in schedule) {
    const card = document.createElement('div')
    card.classList.add('card')

    const h3 = document.createElement('h3')
    h3.textContent = `${key}`
    const p1 = document.createElement('p')
    p1.textContent = `Время проведения: ${schedule[key][0]}`
    const p2 = document.createElement('p')
    p2.textContent = `Кол-во учеников: ${schedule[key][1]}`
    const p3 = document.createElement('p')
    p3.classList.add("count")
    p3.textContent = `Группа: ${schedule[key][2]}`


    const button1 = document.createElement('button')
    button1.classList.add('button1')
    button1.textContent = "Записаться"
    button1.addEventListener('click', event => {
        if (schedule[key][2] == schedule[key][1]) {
            button1.style.backgroundColor = '#292727'
        }
        else {
            const div = button1.parentElement.querySelector('.count')
            schedule[key][2] += 1
            div.textContent = `Группа: ${schedule[key][2]}`

            localStorage.setItem(`${button1.parentElement.querySelector('h3').textContent}`, `${button1.parentElement.querySelector('.count').textContent}`)
        }
    })
    const button2 = document.createElement('button')
    button2.classList.add('button2')
    button2.textContent = "Отписаться"
    button2.addEventListener('click', (e) => {
        const div = button2.parentElement.querySelector('.count')
        schedule[key][2] -= 1
        div.textContent = `Группа: ${schedule[key][2]}`
    })

    card.appendChild(h3)
    card.appendChild(p1)
    card.appendChild(p2)
    card.appendChild(p3)
    card.appendChild(button1)
    card.appendChild(button2)

    cards.appendChild(card)
}