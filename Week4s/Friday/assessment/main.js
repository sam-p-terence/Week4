const booksContainer = document.querySelector('#books-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/books`

const booksCallback = ({ data: books }) => displayBooks(books)
const errCallback = err => console.log(err)

const getAllBooks = () => axios.get(baseURL).then(booksCallback).catch(errCallback)
const createBooks = body => axios.post(baseURL, body).then(booksCallback).catch(errCallback)

// const fortuneBtn = document.getElementById("fortuneButton")
// const getFortune = () => {
//     axios.get("http://localhost:4000/api/fortune/")
//         .then(res => {
//             const data = res.data;
//             alert(data);
//     });
// };
// fortuneBtn.addEventListener('click', getFortune)

function submitHandler(e) {
    e.preventDefault()

    let address = document.querySelector('#address')
    let imageURL = document.querySelector('#img')
    let bodyObj = {
        address: address.value,
        imageURL: imageURL.value
    }
    createBooks(bodyObj)
    address.value = ''
    imageURL.value = ''
}

function createBooksCard(books) {
    const booksCard = document.createElement('div')
    booksCard.classList.add('books-card')
    booksCard.innerHTML = `<img alt='book image' src=${books.imageURL} class="books-cover-image"/>
    <p class="address">${books.address}</p>`
    booksContainer.appendChild(booksCard)
}

function displayBooks(arr) {
    booksContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createBooksCard(arr[i])
    }
}

const fortuneButton = document.getElementById("fortuneButton")
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
fortuneButton.addEventListener('click', getFortune)


form.addEventListener('submit', submitHandler)
getAllBooks()