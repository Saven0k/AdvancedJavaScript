// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)


const musicCollection = [
    { title: "Песня", artist: "Майкл Джуксуон", year: 2000 },
    { title: "Кукла колдуна", artist: "Король и шут", year: 1999 },
    { title: "Камнем по голове", artist: "Король и шут", year: 1989 },
    { title: "Still D.R.E.", artist: "Snoop Dogg", year: 2000 },
]

musicCollection[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to ?
                { done: false, value: musicCollection[this.current++] }
                : { done: true }
        }
    }
}
for (let element of musicCollection) {
    console.log(`${element.title} - ${element.artist} (${element.year})`);
}


// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
// Необходимо создать систему управления этими заказами, которая позволит:
// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.
// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

const cook = new Map();

cook.set("Виктор", "Пицца")
cook.set("Ольга", "Суши")
cook.set("Дмитрий", "Десерты")


// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

const food = new Map();

food.set("Виктор", ["Пицца `Маргарита`", "Пицца `Пепперони`"])
food.set("Ольга", ["Суши `Филадельфия`", "Суши `Калифорния`"])
food.set("Дмитрий", ["Тирамису", "Чизкейк"])


// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.s
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const clients = new Map();
clients.set({ name: "Алексей" }, "Пиццу `Пепперони` и Тирамису")
clients.set({ name: "Мария" }, "Суши `Калифорния` и Пиццу `Маргарита`")
clients.set({ name: "Ирина" }, "Чизкейк")