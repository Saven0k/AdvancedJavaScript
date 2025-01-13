const likes = document.querySelector('.likes');
const img = document.querySelector('.photo-img');
const authorName = document.querySelector('.author-name');
const p = document.querySelector('.like');
const heart = document.querySelector('.heart');
const button = document.querySelector('.button');


button.addEventListener('click', () => {
    loadPhoto()
})

heart.addEventListener('click', (e) => {
    p.textContent = Number(p.textContent) + 1
})

async function fetchPhotos() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/?client_id=kOZP4127_QeSporfaAbWcFFU4YSZBMBP8rcGDtKj3z8`);
        const photos = await response.json();
        return photos;
    } catch (error) {
        console.error('Ошибка');
        return [];
        
    }
}

async function loadPhoto() {
    const photos = await fetchPhotos();
    
    if (photos.length > 0) {
        let mt = Math.round(Math.random() * 10);
        img.src = photos[mt].urls.small
        authorName.textContent = photos[mt].user.name;
    }
}

document.addEventListener('load', loadPhoto())
