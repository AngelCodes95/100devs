const path = require('path');

// bring in mongoose
const mongoose = require('mongoose')
/* if line 4 gives error, solution is "const path = require('path');

// Normalize the path to mongoose
const mongoosePath = require.resolve('mongoose');
const mongoose = require(mongoosePath);" */ 

// db connect
const connectToDB = async () => {
    // try to connect
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${connect.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectToDB 