const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
// the following two lines are a bug fix for lines 9 & 10, currently commented out but left in for learning purposes
const path = require('path');
const connectToDB = require(path.join(__dirname, 'config', 'db'));

/* there is a bug on the bellow implementation of connectToDB. when exporting the connectToDB module, the file path is switched from "Documents" to 'documents' and it's causing a casing error, code still runs and connects to db, but throws casing error */
//const connectToDB = require('./config/db')


// path to env file
dotenv.config({ path: './config/config.env' })

connectToDB()

// set express to app variable for readablilty 
const app = express()


// runs morgan if in dev mode
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
// add handlebars for view engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

// set public folder as statics 
app.use(express.static(path.join(__dirname, 'public')))

// Routes
// Normalize the path to the routes
const routesPath = require.resolve(path.join(__dirname, 'routes', 'index.js'));
app.use('/', require(routesPath));

// set up port
const PORT = process.env.PORT || 5000


// log wether server is running in dev or prod mode
app.listen(
    PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)