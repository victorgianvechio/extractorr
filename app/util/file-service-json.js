const fs = require('fs')

const generateJSON = (fileName, json) => {
    fs.writeFile(`./result/${fileName}.json`, JSON.stringify(json, null, 4), function (err) {
        if (err)
            console.log(err.message)
        else
            console.log('JSON successfully generated.')
    })
}

module.exports = {
    generateJSON: generateJSON
}
