const button = document.querySelector('.button');
const container = document.querySelector('.container')


const fetchNews = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (new Date().getSeconds() % 5 == 0) {
                reject(new Error("Ошибка"))
            }
            else {
                resolve(true)
            }
        }, 2000);
    })
}

button.addEventListener('click', (e) => {
    fetchNews()
        .then((result) => {
            const news = document.createElement('div');
            const newsText = document.createElement('h5');
            newsText.textContent = "Привет с урала"
            news.appendChild(newsText);
            container.appendChild(news);
        })
        .catch((error) => console.log(error.message))
}
)
