const mongoose = require('../../../db/db-connection.js')
const newsSchema = require('../schema/news-schema.js')
const headerDocument = require('../../util/header/insert-document-header.js')
const fileService = require('../../util/file-service-json.js')

const Schema = mongoose.Schema(newsSchema)
let news = mongoose.model('new', Schema)

/* # NPM METHOD */
const insert = (filename) => {
    let data = require('../../../result/' + filename)
    // let data = '../../../result/xtractorr-v1.json';
    headerDocument.insert(data.document)
    news.insertMany(data.news, function (err) {
        if(err)
            console.log('Error news', err)
        else
            console.log(`Successfully inserted ${data.news.length} documents!`)
        mongoose.connection.close()
    })
}

const insertJSON = (data) => {
    headerDocument.insert(data.document)
    news.insertMany(data.news, function (err) {
        if(err)
            console.log('Error news', err)
        else
            console.log(`Successfully inserted ${data.news.length} documents!`)
        mongoose.connection.close()
    })
}

module.exports = {
    insert: insert,
    insertJSON: insertJSON
}
