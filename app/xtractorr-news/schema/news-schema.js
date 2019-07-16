module.exports = {
    uuidXtract: String,
    title: String,
    linkPub: String,
    datePub: String,
    description: String,
    categories: [String],
    entities: [{
        desctype: String,
        text: String,
        relevance: Number,
        disambiguation: {
            subtype: [String],
            name: String,
            dbpedia_resource: String
        },
        count: Number
    }],
    concepts: [{
        text: String,
        relevance: Number,
        dbpedia_resource: String,
        teste: String
    }]
}
