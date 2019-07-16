const puppeteer = require('puppeteer')
const path = require('path')

const executionTime = require('../util/calc-execution-time.js')
const fileService = require('../util/file-service-json.js')
const model = require('../util/header/header-document-model.js')
const fileName = path.basename(__filename, '.js')
const scrapContent = require('./services/scrap-service.js')
const scan = require('./services/scan-service.js')

let browser = ''
const pageURL = 'http://www.inovamarilia.com.br'

const listUrl = [
    'http://www.inovamarilia.com.br/category/noticias/page/',
    'http://www.inovamarilia.com.br/category/eventos/page/',
    'http://www.inovamarilia.com.br/category/editais-2/page/'
]

const scrap = async () => {

    browser = await puppeteer.launch({headless: false})

    console.log('Scanning...')

    executionTime.initiate()
    model.news = []

    for(i in listUrl)
        await scan.execute(model, browser, listUrl[i])

    console.log(`Scanned ${model.document.pageScanned} pages`)
    console.log(`Found ${model.news.length} objects`)

    await scrapContent.execute(model, browser)
    executionTime.end()

    model.document.page = pageURL
    model.document.app = fileName
    model.document.objScraped = model.news.length
    model.document.executionTime = `${executionTime.getTime()}ms`

    await browser.close()
    return model
}

/* # NPM METHOD */
const scrapOne = async (link) => {

    browser = await puppeteer.launch({headless: false})

    console.log('Scanning...')

    executionTime.initiate()
    model.news = []

    await scan.execute(model, browser, link)

    console.log(`Scanned ${model.document.pageScanned} pages`)
    console.log(`Found ${model.news.length} objects`)

    await scrapContent.execute(model, browser)
    executionTime.end()

    model.document.page = pageURL
    model.document.app = fileName
    model.document.objScraped = model.news.length
    model.document.executionTime = `${executionTime.getTime()}ms`

    await browser.close()
    return model
}

const xtract = async () => {
    result = await scrap()
    fileService.generateJSON(fileName, result)
    return result
}

// xtract()

const xtract_insert = async () => {
    result = await scrap()
    await fileService.generateJSON(fileName, result)
    const db = await require('./services/insert-service.js')
    await db.insertJSON(result)
    return result
}

const xtract_noticia = async () => {
    result = await scrapOne(listUrl[0])
    fileService.generateJSON(fileName + '-noticia', result)
    return result
}

const xtract_evento = async () => {
    result = await scrapOne(listUrl[1])
    fileService.generateJSON(fileName + '-evento', result)
    return result
}

const xtract_edital = async () => {
    result = await scrapOne(listUrl[2])
    fileService.generateJSON(fileName + '-edital', result)
    return result
}

module.exports = {
    xtract: xtract,
    xtract_insert: xtract_insert,
    xtract_noticia: xtract_noticia,
    xtract_evento: xtract_evento,
    xtract_edital: xtract_edital
}
