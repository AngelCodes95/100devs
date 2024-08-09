const mongoose = require('mongoose')


// name, description, amount paid, listing price, sold price, acquisition miles, additional notes or fees, reciept y|n, type of acquisition, location of acquisition, quisition entry cost.
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
        minLength: [3, 'Product name must be at least three characters long'],
        index: true,
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
    },
    amount_paid: {
        type: Number,
        required: [true, 'Amount Paid is required'],
        min: [0, 'Amount paid cannot be negative']
    },
    listing_price: {
        type: Number,
        min: [0, 'List price cannot be negative'],
    },
    sold_price: {
        type: Number,
        min: [0, 'Sold price cannot be negative'],
    },
    acquisition_miles: {
        type: Number,
        min: [0, 'Miles cannot be negative'],
    },
    additional_notes: {
        type: String,
    },
    receipt: {
        type: Boolean,
    },
    type_of_acquisition: {
        type: String,
        enum: ['estate sale', 'swap meet', 'auction', 'thrift store', 'consignment store', 'other'],
    },
    acquisition_location: {
        type: String,
    },
    acquisition_entry_cost: {
        type: Number,
        min: [0, 'Entry cost cnanot be negative'],
    },
    status : {
        type: String,
        default: 'public',
        enum: ['public', 'private']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User reference is required'],
        index: true,
    },
    image : {
        type: String,
    },
    createdAt : {
        type : Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Product', ProductSchema)