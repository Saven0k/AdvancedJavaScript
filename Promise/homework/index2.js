const cards = document.querySelector('.cards')


for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);

    const card = document.createElement('div')
    card.classList.add('card')

    const items = document.createElement('div')
    items.classList.add('items')

    const h2 = document.createElement('h2')
    h2.textContent = key;
    items.appendChild(h2)
    const p = document.createElement('p')
    p.textContent = localStorage.getItem(key)
    items.appendChild(p);
    const clear = document.createElement('h2')
    clear.textContent = "X"
    clear.classList.add('clear')

    clear.addEventListener('click', () => {
        localStorage.removeItem(key)
        location.reload();
    })


    card.appendChild(items)
    card.appendChild(clear)

    cards.appendChild(card)
}