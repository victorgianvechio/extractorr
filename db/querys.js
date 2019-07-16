const mongoose = require('./db-connection.js')
const newsSchema = require('../app/xtractorr-news/schema/news-schema.js')
const fileService = require('../app/util/file-service-json.js')

const Schema = mongoose.Schema(newsSchema)
let news = mongoose.model('new', Schema)

/* news.find({datePub: '21 de junho de 2018'}, function (err, docs) {
  console.log(docs);
}); */

// db.news.find({"datePub": "21 de junho de 2018"}).pretty()

/* news.find({datePub: '21 de junho de 2018'}, function (err, docs) {
  console.log(docs[0].entities.length);
  mongoose.connection.close();
}); */

/*
news.find({"entities.desctype": "Person"}, 'title link', function (err, docs) {
  for(i in docs) {
    console.log(docs[i]);
  }
  console.log(docs.length);
  mongoose.connection.close();
}); */

/* news.find({}).
  where('entities.desctype').equals('Person').
  where('entities.text').equals('Prof. Dr. Elvis Fusco').
  sort('entities.relevance').
  select('title linkPub entities.text entities.relevance').
  exec(function (err, docs) {
    //for(i in docs) {
      console.log(docs[0]);
    //}
    //mongoose.connection.close();
  }); */

function sortJSON (data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key]
        var y = b[key]

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0))
        }
    })
}

function comparer (a, b) {
    console.log('TESTE: A ', a.relevance)
    console.log('TESTE: B ', b.relevance)
    if (a.relevance < b.relevance)
        return -1

    if (a.relevance > b.relevance)
        return 1

    return 0
}



let objOrdered = []
let allObj = [];

// (async() => {
//   const docs =
//     await news.
//     find().
//     where('entities.desctype').equals('Person').
//     where('entities.text').equals('Prof. Dr. Elvis Fusco').
//     sort('news.entities.relevance').
//     select('title linkPub entities._id entities.text entities.relevance entities.desctype').
//     exec( (err, docs) => {
//       //console.log(docs[0]);
//       /*docs.relevance = docs.entities.map( (entity)=>{
//         entity['desctype'] = entity['type'];
//         delete entity['type'];
//         return entity;*/
//       for(i in docs){
//         let objPub = {
//           "title": "",
//           "linkPub": "",
//           "text": "",
//           "desctype": "",
//           "relevance": 0
//         };
//         objPub.title = docs[i].title;
//         objPub.linkPub = docs[i].linkPub;
//         for(e in docs[i].entities){
//           if (docs[i].entities[e].text == 'Prof. Dr. Elvis Fusco'){
//             objPub.relevance = docs[i].entities[e].relevance;
//             objPub.text = docs[i].entities[e].text;
//             objPub.desctype = docs[i].entities[e].desctype;
//           }
//         }
//         //if(docs[i].text != objPub.text)
//           allObj.push(objPub);
//         //console.log(allObj[i])
//         //console.log(docs[i]);
//       }
//       objOrdered = sortJSON(allObj, 'relevance', 'desc')
//       //objOrdered = allObj.sort(comparer);
//       fileService.generateJSON('result-select8', objOrdered);
//       mongoose.connection.close();
//       //fileService.generateJSON('result_find', docs);
//     });
//   })();

(async () => {
    const docs =
    await news.
        find().
        where('concepts.text').equals('Inovação').
        sort('news.concepts.relevance').
        select('title linkPub entities._id concepts.text concepts.relevance').
        exec((err, docs) => {
            // console.log(docs[0]);
            /* docs.relevance = docs.entities.map( (entity)=>{
        entity['desctype'] = entity['type'];
        delete entity['type'];
        return entity; */
            for(i in docs) {
                let objPub = {
                    'title': '',
                    'linkPub': '',
                    'text': '',
                    'relevance': 0
                }
                objPub.title = docs[i].title
                objPub.linkPub = docs[i].linkPub
                for(e in docs[i].concepts) {
                    if (docs[i].concepts[e].text == 'Parque tecnológico') {
                        objPub.relevance = docs[i].concepts[e].relevance
                        objPub.text = docs[i].concepts[e].text
                    }
                }
                // if(docs[i].text != objPub.text)
                allObj.push(objPub)
                // console.log(allObj[i])
                // console.log(docs[i]);
            }
            objOrdered = sortJSON(allObj, 'relevance', 'desc')
            // objOrdered = allObj.sort(comparer);
            fileService.generateJSON('result-select-parque', objOrdered)
            mongoose.connection.close()
            // fileService.generateJSON('result_find', docs);
        })
})()
