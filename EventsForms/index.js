document.querySelector('.back').addEventListener('click', (e) => {
    const wrrp = document.querySelector(".wrapper")
    const wrapper = document.querySelector('.wrapper').querySelector('.active')
    wrapper.classList.remove("active")

    if (wrapper.previousSibling.previousSibling) {
        wrapper.previousSibling.previousSibling.classList.add("active")
        document.getElementById(`${Number(wrapper.previousSibling.previousSibling.id) - 4}`).checked = true
    } else {
        wrrp.lastElementChild.classList.add("active")
        document.getElementById(`${Number(wrrp.lastElementChild.id) - 4}`).checked = true

    }
})

document.querySelector('.forward').addEventListener('click', (e) => {
    const wrrp = document.querySelector(".wrapper")
    const wrapper = document.querySelector('.wrapper').querySelector('.active')
    wrapper.classList.remove("active")

    if (wrapper.nextSibling.nextSibling) {
        wrapper.nextSibling.nextSibling.classList.add("active")
        document.getElementById(`${Number(wrapper.nextSibling.nextSibling.id) - 4}`).checked = true
    } else {
        wrrp.firstElementChild.classList.add("active")
        document.getElementById(`${Number(wrrp.firstElementChild.id) - 4}`).checked = true

    }
})



const balls = document.querySelector('.navigation-balls')
balls.querySelectorAll('.input').forEach(element => {
    element.addEventListener('click', () => {
        if(element.checked) {
            const doc = document.getElementById(`${Number(element.id) + 4}`);
            document.querySelector('.active').classList.remove('active')

            if (!doc.classList.contains('active')) {
                doc.classList.add('active')
            }
        }

    })
});