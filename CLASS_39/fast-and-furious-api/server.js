const express = require('express')
const app = express()
const PORT = 1320


app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

// listen for the server on port variable or default
app.listen(PORT, ()=>{
    console.log(`The Server is running on ${PORT}! You better go catch it!`)
})