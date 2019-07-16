const config = require('./db-config')

module.exports = {
    server: {
        user: config.server.user,
        pass: config.server.pass,
        useNewUrlParser: true,
        connectTimeoutMS: 2000000,
        socketTimeoutMS: 2000000
    },

    localhost: {
        user: config.localhost.user,
        pass: config.localhost.user,
        useNewUrlParser: true
    }
}
