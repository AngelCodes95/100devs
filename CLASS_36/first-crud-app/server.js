const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mongoClient = require('mongodb').MongoClient
const connectionString = `mongodb+srv://angelcodes95Starwars:ZippyBoy1!@cluster0.ymjom1m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoClient.connect(connectionString)
    .then(client => {
        // connect to starwars database in cluster0
        const db = client.db('star-wars')
        // within the starwars database gather the quotes collection
        const quotesCollection = db.collection('quotes')
        console.log('Connected to database')
        
        app.set('view engine', 'ejs')
        app.use(bodyParser.urlencoded( {extended: true}));
        app.use(express.static('public'));
        app.use(bodyParser.json());

        // define the route to add new quotes
        app.post('/quotes', (req, res) => {
            quotesCollection
              .insertOne(req.body)
              .then(result => {
                console.log(result)
                res.redirect('/')
              })
              .catch(error => console.error(error))
          })

            // route to fetch and render quotes
        app.get('/', (req, res) => {
            quotesCollection
                .find()
                .toArray()
                .then(results => {
                    // console log for debugging
                    console.log(results)
                    res.render('index.ejs', { quotes: results });
                })
                .catch(error => console.error(error))     
        });
        app.put('/quotes', (req, res) => {
            console.log(req.body)
            quotesCollection
                .findOneAndUpdate(
                    { name: 'Yoda' },
                    {
                    $set: {
                        name: req.body.name,
                        quote: req.body.quote,
                    },
                    },
                    {
                    upsert: true,
                    }
                )
                .then(result => {
                    console.log(result)
                    res.json('Success')
                   })
                  .catch(error => console.error(error))
              })
        app.delete('/quotes', (req, res) => {
            quotesCollection
                .deleteOne({ name: req.body.name })
                .then(result => {
                    if (result.deletedCount === 0) {
                        return res.json('No quote to delete')
                    }
                    res.json(`Deleted Darth Vader's quote`)
                    })
                    .catch(error => console.log(error))
              })



        app.listen(3000, function(){
            console.log('listening on 3000')
        })
    })
    .catch(error => console.error(error));

console.log('May Node be with you');