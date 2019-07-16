require('dotenv').config()
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js')

const nlu = new NaturalLanguageUnderstandingV1({
    username: '201bd01b-3053-46a2-b57e-8820767bda23',
    password: '7Fvj1dWioTyZ',
    version: '2018-04-05',
    url: 'https://gateway.watsonplatform.net/natural-language-understanding/api'
})

// const nlu = new NaturalLanguageUnderstandingV1({
//   username: process.env.WATSON_NLU_USERNAME,
//   password: process.env.WATSON_NLU_PASSWORD,
//   version: process.env.WATSON_NLU_VERSION,
//   url: process.env.WATSON_NLU_API_URL
// });

const analyze = (news) => {
    nlu.analyze({
        html: news.description,
        features: {entities: {}, concepts: {}}
    },
    function (err, response) {
        if (err) {
            console.log('Error analyze', err)
        } else {
            news.entities = response.entities.map((entity) => {
                entity['desctype'] = entity['type']
                delete entity['type']
                return entity
            })
            news.concepts = response.concepts
        }
    }
    )
}

module.exports = {
    analyze: analyze
}
