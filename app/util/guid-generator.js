const now = new Date()
let timestamp = now.getDate() + now.getMilliseconds()

function s4 () {
    return Math.floor((timestamp + Math.random()) * 0x10000).toString(16).substring(1)
}

function generate () {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4()
  + s4() + s4()
}

module.exports = {
    generate: generate
}
