// c:/data/db
const mongoose = require('mongoose')
const dbURI = require('./db-uri').localhost
const options = require('./db-options').localhost

mongoose.Promise = global.Promise
mongoose.connect(dbURI, options)

mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection connected to ' + dbURI)
})
mongoose.connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err)
})
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected')
})
mongoose.connection.on('open', () => {
    console.log('Mongoose default connection is open')
})

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination')
        process.exit(0)
    })
})

module.exports = mongoose
