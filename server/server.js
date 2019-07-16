const express = require('express')
const server = express()

require('./config')(server)
require('./routes')(server)
