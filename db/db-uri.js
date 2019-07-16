const config = require('./db-config')

module.exports = {
    // server: `mongodb://${config.server.user}:${config.server.pass}@${config.server.host}:${config.server.port}/${config.server.db}`,
    server: `mongodb://${config.server.host}/${config.server.db}`,

    localhost: `mongodb://${config.localhost.host}/${config.localhost.db}`
}
