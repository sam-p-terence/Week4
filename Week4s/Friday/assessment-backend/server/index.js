const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getBooks,
    createBooks, 
    getFortune,
} = require('./controller')

app.get(`/api/books`, getBooks)
app.post(`/api/books`, createBooks)
app.get(`/api/fortune`, getFortune)

app.listen(4004, () => console.log(`running on 4004`))