const mongoose = require('../../../db/db-connection.js')
const headerDocumentSchema = require('./header-mongoose-schema.js')

const Schema = mongoose.Schema(headerDocumentSchema)
let document = mongoose.model('xtractorrdoc', Schema)

const insert = (data) => {
    document.create(data, function (err) {
        if(err)
            console.log('Error header', err)
        else
            console.log(`Successfully inserted header document!`)
    })
}

module.exports = {
    insert: insert
}
