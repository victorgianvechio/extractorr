const express = require('express')
const router = express.Router()
const news = require('../app/xtractorr-news/xtractorr-v1.js')


router.get('/xtract-noticia', async (req, res) => {
    const result = await news.xtract_noticia()
    res.send(JSON.stringify(result, null, 4))
})

router.get('/xtract-evento', async (req, res) => {
    const result = await news.xtract_evento()
    res.send(JSON.stringify(result, null, 4))
})

router.get('/xtract-edital', async (req, res) => {
    const result = await news.xtract_edital()
    res.send(JSON.stringify(result, null, 4))
})

router.get('/xtract', async (req, res) => {
    const result = await news.xtract()
    res.send(JSON.stringify(result, null, 4))
})

module.exports = router
