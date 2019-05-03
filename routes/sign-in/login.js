const passport = require('passport');
const jwt = require('jsonwebtoken');
const localStrategy = require('./localStrategy');

passport.use(localStrategy);


function loginHandler(req, res, next) {
    passport.authenticate('local', (error, profile, info) => {
        if (profile) {
            const tokenValidityDays = 7;
            const token = jwt.sign({
                email: profile.email,
                exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7),
            }, process.env.JWT_SECRET_TOKEN);

            res.json({
                success: true,
                id: profile.id,
                token
            });
        } else {
            if (info) {
                res.json({
                    error: info.message,
                });
            } else {
                res.json({ error });
            }
        }
    })(req, res, next);
}

module.exports = exports = loginHandler;
