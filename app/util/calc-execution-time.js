let init = ''
let time = ''

let getTime = () => {
    return time
}

const initiate = () => {
    init = Date.now()
}

const end = () => {
    time = Date.now() - init
}

module.exports = {
    initiate: initiate,
    end: end,
    getTime: getTime
}
