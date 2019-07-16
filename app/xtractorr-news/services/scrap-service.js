const Watson = require('../../ibm-watson/natural-language-understand/understand-service.js')

function delay () {
    return new Promise(resolve => setTimeout(resolve, 150))
}

const scrapContent = async (model, browser) => {
    let mainPage = await browser.newPage()
    let newsDescription = ''

    /* await mainPage.setViewport({ width: 800, height: 600 });
  await mainPage.setRequestInterception(true);

  mainPage.on('request', (req) => {
    if(req.resourceType() == 'stylesheet' || req.resourceType() == 'font' || req.resourceType() == 'image')
      req.abort();
    else
      req.continue();
  }); */

    console.log('Scraping objects...')
    for(let i in model.news) {

        await mainPage.goto(model.news[i].linkPub, {timeout: 0})
        console.log(`obj[${i}] = ${model.news[i].title}\n`)

        newsDescription = await mainPage.evaluate(() => {
            let description = ''
            try {
                description = document.querySelector('.desc > .post_content > div > div > div').innerText
            } catch (e) {
                console.log('querySelector error: ', e) 
            }
            return description
        })

        if(!newsDescription.trim())
            model.news[i].description = model.news[i].title
        else
            model.news[i].description = newsDescription.trim()

        // Chama o serviço NLU do Watson
        Watson.analyze(model.news[i])
        await delay()
    }
    console.log(`Scraped ${model.news.length} objects`)
    await mainPage.close()
}

module.exports = {
    execute: scrapContent
}
