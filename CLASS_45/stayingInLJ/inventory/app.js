const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')


// the following two lines are a bug fix for lines 9 & 10, currently commented out but left in for learning purposes
const path = require('path');
const connectToDB = require(path.join(__dirname, 'config', 'db'));

/* there is a bug on the bellow implementation of connectToDB. when exporting the connectToDB module, the file path is switched from "Documents" to 'documents' and it's causing a casing error, code still runs and connects to db, but throws casing error */
//const connectToDB = require('./config/db')

// env
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') })


// passport config
require(path.join(__dirname, 'config', 'passport'))(passport)

connectToDB()

// set express to app variable for readablilty 
const app = express()


// runs morgan if in dev mode
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
// add handlebars for view engine
app.engine('.hbs', engine({ 
    extname: '.hbs',
    helpers: require('./helpers/handlebars-helpers'),
 }));
app.set('view engine', '.hbs');

// Sessions middleware
app.use(session({
    secret : 'keyboard cat',
    resave : false,
    saveUninitialized : false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
}))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// set public folder as statics 
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', require(path.join(__dirname, 'routes', 'index')))
app.use('/auth', require(path.join(__dirname, 'routes', 'auth')))


// set up port
const PORT = process.env.PORT || 5000


// log wether server is running in dev or prod mode
app.listen(
    PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)