const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mongoClient = require('mongodb').MongoClient
const connectionString = `mongodb+srv://angelcodes95Starwars:ZippyBoy1!@cluster0.ymjom1m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoClient.connect(connectionString)
    .then(client => {
        const db = client.db('star-wars')
        const quotesCollection = db.collection('quotes')
        console.log('Connected to database')
        app.post('/quotes', (req, res) => {
            quotesCollection
              .insertOne(req.body)
              .then(result => {
                console.log(result)
                
              })
              .catch(error => console.error(error))
          })
    })
    .catch(error => console.error(error))

app.use(bodyParser.urlencoded( {extended: true}));

app.listen(3000, function(){
    console.log('listening on 3000')
})

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

console.log('May Node be with you')