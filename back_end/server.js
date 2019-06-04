const express = require('express')

const app = require('./app')
const Database = require('./database')

const database = new Database('mongodb://localhost:27017')

database.connect('testdb')
database.on('connect', () => console.log('Подключение к БД установлено'))
database.on('disconnect', () => console.log('Подключение к БД остановлено'))

const server = express()

server.database = database
server.use(express.static('public'))
server.use(app)

server.listen(3000, () => console.log('Сервер запущен на http://localhost:3000'))

process.on('SIGINT', () => {
    database.close().then(() => process.exit(0)) 
})