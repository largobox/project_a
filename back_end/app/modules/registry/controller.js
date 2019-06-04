module.exports = {
    index: async (req, res) => {
        const db = req.app.database
        const coll = db.collection('note')

        const notes = await coll.find().toArray()

        res.json(notes)
    },

    create: async (req, res) => {
        const card = req.body
        const db = req.app.database
        const coll = db.collection('note')

        console.log('BODY: ', req.body)

        const notes = await coll.insertOne(card)

        res.json(card)
    }
}