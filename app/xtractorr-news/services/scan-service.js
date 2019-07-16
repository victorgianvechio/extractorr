const scan = async (model, browser, url) => {

    let pageNumber = 1
    let hasPost = true
    let mainPage = await browser.newPage()
    // model.news = [];

    /* await mainPage.setViewport({ width: 800, height: 600 });
  await mainPage.setRequestInterception(true);

  mainPage.on('request', (req) => {
    if(req.resourceType() == 'stylesheet' || req.resourceType() == 'font' || req.resourceType() == 'image')
      req.abort();
    else
      req.continue();
  }); */

    while(hasPost === true) {
        // while(pageNumber <= 2){

        // await mainPage.goto(`http://www.inovamarilia.com.br/category/noticias/page/${pageNumber}/`, {timeout: 0});
        await mainPage.goto(`${url}${pageNumber}/`, {timeout: 0})

        // Variável responsável por conter os dados da extração
        let news = await mainPage.evaluate((guid) => {
            const newsData = []

            // Acessa a página buscando as informações
            document.querySelectorAll('.post > .desc').forEach((elem) => {

                // Informaões a serem extraídas
                let data = {
                    'uuidXtract': guid,
                    'title': elem.querySelector('h3 > a').innerText,
                    'linkPub': elem.querySelector('h3 > a').href,
                    'datePub': elem.querySelector('.date').innerText,
                    'description': '',
                    'categories': []
                }

                // Pega as categorias e insere no documento
                let categories = elem.querySelector('.category').innerText.split(',')
                for(let i = 0; i < categories.length; i++)
                    data.categories.push(categories[i])

                // Insere a notícia em um documento JSON
                newsData.push(data)
            })
            return newsData
        }, model.document.uuidXtract)

        // Verifica se ainda existem posts, se não existir sai do loop
        if(news.length === 0)
            hasPost = false
        else {
            for(let item in news)
                model.news.push(news[item])
            pageNumber++
        }
    }
    model.document.pageScanned += pageNumber
    pageNumber = 1
    await mainPage.close()
}

module.exports = {
    execute: scan
}
