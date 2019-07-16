const news = require('../app/xtractorr-news/xtractorr-v1.js')

module.exports = (server) => {

    /* API ROUTES */
    server.use('/api/v1/xtractorr', require('../api/routes.js'))

    server.get('/', function (req, res) {
    // res.send('ok');
    // res.render('index');
    // console.log('public/view/index.html')
        res.sendfile('./public/view/index.html')
    })

    server.get('/index2', function (req, res) {
    // res.send('ok');
    // res.render('index');
    // console.log('public/view/index.html')
        res.sendfile('./public/view/index-2.html')
    })

    server.get('/xtract', async function (req, res) {
        const result = await news.xtract()
        res.send(JSON.stringify(result, null, 4))
    })

    server.get('/xtract-noticia', async function (req, res) {
        const result = await news.xtract_noticia()
        res.send(JSON.stringify(result, null, 4))
    })

    server.get('/xtract-evento', async function (req, res) {
        const result = await news.xtract_evento()
        res.send(JSON.stringify(result, null, 4))
    })

    server.get('/xtract-edital', async function (req, res) {
        const result = await news.xtract_edital()
        res.send(JSON.stringify(result, null, 4))
    })

}
