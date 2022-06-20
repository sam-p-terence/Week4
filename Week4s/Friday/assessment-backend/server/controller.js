const books = require('./db.json')
let globalId = 7

module.exports = {
    getBooks: (req, res) => res.status(200).send(books),
    createBooks: (req, res) => {
        let { address, price, imageURL } = req.body
        let newBooks = {
            id: globalId,
            address, 
            price,
            imageURL
        }
        books.push(newBooks)
        res.status(200).send(books)
        globalId++
    },
    getFortune: (req, res) => {
        const fortune = ["Expect much of yourself and little of others.", "Failure is the path of lease persistence.", "Good to begin well, better to end well.", "A faithful friend is a strong defense.", "A lifetime of happiness lies ahead of you."];
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
        res.status(200).send(randomFortune);
    },
}