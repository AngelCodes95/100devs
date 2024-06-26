const express = require('express')
const app = express()
const PORT = 1320
const characters = require('./characters')
const cors = require('cors')


// use cors module 
app.use(cors())

// load main html page when visiting home page
app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

// api route to respond with desired characters real name
app.get('/api/:characterName', (req, res) => {
    const charactersName = req.params.characterName.toLowerCase()
    
    if(characters[charactersName]){
        res.json(characters[charactersName])
        console.log(`successfully responded with "${charactersName}'s" API data.`)
    }else{
        throw console.error('Error, Name  Not Available');
    }
})

// listen for the server on port variable or default
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The Server is running on ${PORT}! You better go catch it!`)
})

