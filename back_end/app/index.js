const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const registry = require('./modules/registry')

const app = express()

app.on('mount', (server) => { app.database = server.database })
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))
app.use(bodyParser.json())
app.use(registry)
app.get('/', (req, res) => { res.render('index') })

module.exports = app