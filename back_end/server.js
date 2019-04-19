const express = require('express')
const peopleData = require('./data/people.json')

const server = express()

server.set('view engine', 'pug')
server.use(express.static('public'))
server.use(express.json())

server.get('/', (req, res) => {
    res.render('index')
})

// index
server.get('/people', (req, res) => {
    res.send(peopleData)
})

server.listen(3000, () => console.log('Сервер запущен на http://localhost:3000'))