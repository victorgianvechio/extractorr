const guid = require('../guid-generator').generate()

module.exports = {
    'document': {
        'uuidXtract': guid,
        'page': '',
        'date': new Date().toString(),
        'pageScanned': 0,
        'objScraped': 0,
        'app': '',
        'executionTime': ''
    }
}
