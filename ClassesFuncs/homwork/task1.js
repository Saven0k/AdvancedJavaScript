// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для 
// добавления книги, удаления книги и получения информации о наличии книги.

class Library {
    // Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
    #books = [];

    // Реализуйте геттер allBooks, который возвращает текущий список книг.
    get books() {
       return this.#books
    }

    // Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, 
    // выбросьте ошибку с соответствующим сообщением.

    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error('Книжка с таким названием уже есть в библиотеке')
        }
        this.#books.push(title)
        return this.#books; 
    }

    // Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, 
    // выбросьте ошибку с соответствующим сообщением.

    removeBook(title) {
        if (!this.#books.includes(title)) {
            throw new Error('Книги с таким название нет в библиотеке')
        }
        this.#books = this.#books.filter((el) => el != title)
        return this.#books; 
    }

    // Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, 
    // есть ли такая книга в списке или нет.

    hasBook(title) {
        return this.#books.includes(title)
    }

    // Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не с
    // одержит дубликатов; в противном случае выбрасывайте ошибку.
    constructor(books) {
        this.#books = books;
    }
}

let library = new Library(['Капитанская дочка','Винни-Пух', 'Колобок']); // Создали экземпляр класса 

console.log(library.books); // ['Капитанская дочка', 'Винни-Пух', 'Колобок']

console.log(library.addBook('Колобок')); // Error: Книжка с таким названием уже есть в библиотеке
console.log(library.addBook('Мотылек')); // ['Капитанская дочка', 'Винни-Пух', 'Колобок', 'Мотылек']

console.log(library.removeBook('Колобок')); // ['Капитанская дочка', 'Винни-Пух', 'Мотылек']
console.log(library.removeBook('Алиса в стране чудес ')); //  Книги с таким название нет в библиотеке

console.log(library.hasBook('Алиса в стране чудес')); // false
console.log(library.hasBook('Алиса в  чудес')); // false
