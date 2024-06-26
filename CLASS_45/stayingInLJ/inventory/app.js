// create express server
const express = require('express')
// load environment variables from env files
const dotenv = require('dotenv')

// loading config
dotenv.config({ path: './config/config.env' })

const app = express()

// set up port
const PORT = process.env.PORT || 5000


// log wether server is running in dev or prod mode
app.listen(
    PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)