const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')
// bring in products model
const Product = require('../models/Product')

// @desc        Login/LandingPage
// @route       GET / 
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})

// @desc    Dashboard
// @route GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
    try {
        const products = await Product.find({ user: req.user.id }).lean()
        res.render('dashboard',{
            name: req.user.firstName,
            products
        })
    } catch (err) {
        console.error(err)
    }
})

//@desc route to render product form
//@route GET /add-product
router.get('/add-product', ensureAuth, (req, res) => {
    res.render('addProduct', {
        layout: 'main',
    })
})

//@desc route to handle form submission to add product
//@route POST /add-product
router.post('/add-product', ensureAuth, async (req, res) => {
    console.log(req.body)
    try {
        const {
            name,
            description,
            amount_paid,
            listing_price,
            sold_price,
            acquisition_miles,
            additional_notes,
            receipt,
            type_of_acquisition,
            acquisition_location,
            acquisition_entry_cost,
            status,
            image,
        } = req.body;
        console.log(req.body)

        await Product.create({
            name,
            description,
            amount_paid,
            listing_price,
            sold_price,
            acquisition_miles,
            additional_notes,
            receipt: receipt === 'on',
            type_of_acquisition,
            acquisition_location,
            acquisition_entry_cost,
            status,
            user: req.user.id,
            image,
        })

        res.redirect('/dashboard')
    } catch (err) {
        console.error(err)
        console.log(err)
        res.render('error/500', { error: err.message })
    }
})

//@desc View all products
//route GET /view-all-products
router.get('/view-all-products', ensureAuth, async (req, res) => {
    try {
        const products = await Product.find({ user: req.user.id }).lean();
        res.render('viewAllProducts', { products })
    } catch (err) {
        res.render('error/500')
    }
})

//@desc update product details
//route GET /update-product
router.get('/update-product', ensureAuth, (req, res) => {
    res.render('updateProduct', {
        layout: 'main'
    });
})

//@desc delete product
//route GET /remove-product
router.get('/remove-product', ensureAuth, (req, res) => {
    res.render('removeProduct', {
        layout: 'main',
    })
})



module.exports = router