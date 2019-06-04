const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/ambulatory-cards', controller.index)
router.post('/ambulatory-card', controller.create)

// router.get('/ambulatory-card/:id', (req, res) => {
//     res.send('Амбулаторная карта')
// })


// router.get('/ambulatory-card/:id/edit', (req, res) => {
//     res.send('Редактировать карту')
// })

// router.post('/ambulatory-card/:id/update', (req, res) => {
//     res.send('Обновить карту')
// })

// router.delete('/ambulatory-card/:id/delete', (req, res) => {
//     res.send('Удалить карту')
// })

module.exports = router