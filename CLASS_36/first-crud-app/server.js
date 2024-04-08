const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mongoClient = require('mongodb').MongoClient
const connectionString = `mongodb+srv://angelcodes95Starwars:ZippyBoy1!@cluster0.ymjom1m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoClient.connect(connectionString)
    .then(client => {
        console.log('Connected to database')
        const db = client.db('star-wars')
    })
    .catch(error => console.error(error))

app.use(bodyParser.urlencoded( {extended: true}));

app.listen(3000, function(){
    console.log('listening on 3000')
})

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log('Hellooooooooooo!')
    console.log(req.body)
})

console.log('May Node be with you')