const booksContainer = document.querySelector('#books-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/books`

const booksCallback = ({ data: books }) => displayBooks(books)
const errCallback = err => console.log(err)

const getAllBooks = () => axios.get(baseURL).then(booksCallback).catch(errCallback)
const createBooks = body => axios.post(baseURL, body).then(booksCallback).catch(errCallback)


const fortuneButton = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneButton.addEventListener('click', getFortune)

function submitHandler(e) {
    e.preventDefault()
    let imageURL = document.querySelector('#img')
    let bodyObj = {
        imageURL: imageURL.value
    }
    createBooks(bodyObj)
    imageURL.value = ''
}

function createBooksCard(books) {
    const booksCard = document.createElement('div')
    booksCard.classList.add('books-card')

    booksCard.innerHTML = `<img alt='image of a book' src=${books.imageURL} class="book-cover-image"/>
    <p class="book">${books.name}</p>`
    booksContainer.appendChild(booksCard)
}

function displayBooks(arr) {
    booksContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createBooksCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllBooks()