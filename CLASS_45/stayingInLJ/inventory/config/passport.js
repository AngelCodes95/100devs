const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')

module.exports = function(passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/google/callback'
    }, 
        async (accessToken, refreshToken, profile, done) => {
            const newUser = {
                googleId: profile.id,
                displayName: profile.displayName,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                image: profile.photos[0].value,
            }

            try{
                let user = await User.findOne({ googleId: profile.id})

                if(user){
                    done(null, user)
                }else {
                    user = await User.create(newUser)
                    done(null, user)
                }
            } catch (err){
                console.error(err)
            }
        }
    )
)

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    /* BUG FIX :) Model.findById() in Mongoose no longer accepts a callback.  
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user))})

    The above code no longer works and has been replaced by async await, seen below */

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (err) {
            console.error(err)
            done(err, null);
        }
    })
}
