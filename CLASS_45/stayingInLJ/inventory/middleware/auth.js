// protect routes
module.exports = {
    ensureAuth: function (req, res, next){
        if (req.isAuthenticated() && req.user.googleId === process.env.SHELBYS_GOOGLE_ID){
            return next()
        }else{
            res.redirect('/')
        }
    },

    ensureGuest: function(req, res, next){
        if(req.isAuthenticated() && req.user.googleId === process.env.SHELBYS_GOOGLE_ID){
            res.redirect('/dashboard')
        }else{
            return next()
        }
    }
}