const express = require('express')
const app = express()
const PORT = 1320
const characters = require('./characters')



// load main html page when visiting home page
app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

// api route 
app.get('/api', (req, res) => {
    res.json(characters)
})

// listen for the server on port variable or default
app.listen(PORT, ()=>{
    console.log(`The Server is running on ${PORT}! You better go catch it!`)
})

