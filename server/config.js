const express = require('express')
const path = require('path')
const logger = require('morgan')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

module.exports = (server) => {

    const PORT = process.env.PORT || 8080
    const DOMAIN = process.domain || 'localhost'

    // server.set('views', path.join(__dirname, 'views'));
    // server.set('view engine', 'jade');
    server.set('views', path.join(__dirname, '../public/view'))
    server.set('view engine', 'pug')
    server.set('port', PORT)
    server.use(compression())
    server.use(cookieParser())
    server.use(logger('dev'))
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(expressValidator())
    server.use(express.static(path.join(__dirname, '../public')))


    server.use(function (req, res, next) {
        res.setTimeout(2000000, function () {
            console.log('Request has timed out.')
            res.send(408)
        })
        // res.locals.user = req.user ? req.user.toJSON() : null;
        next()
    })

    if (server.get('env') === 'production') {
        server.use(function (err, req, res, next) {
            console.error(err.stack)
            res.sendStatus(err.status || 500)
        })
    };

    server.listen(server.get('port'), function () {
        console.log(`Server listening on http://${DOMAIN}:${PORT}`)
    })
}
