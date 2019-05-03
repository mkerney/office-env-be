const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const models = require('../../models/index');


module.exports = exports = new LocalStrategy({ usernameField: 'username', passwordField: 'password', passReqToCallback: true },
    (async (req, username, password, done) => {
        try {
            const user = await models.user.findOne({ where: { email: username } });
            if (user) {
                if (user.password) {
                    const decodedPassword = await bcrypt.compare(password, user.password)
                    if (decodedPassword) {
                        done(null, user);
                    } else {
                        done({
                            source: 'password',
                            message: 'Wrong Password',
                        }, false);
                    }
                } else {
                    done({
                        source: 'password',
                        message: 'Wrong Password',
                    }, false);
                }
            } else {
                done({
                    source: 'email',
                    message: 'Email ID not found',
                }, false);
            }
        } catch (error) {
            done(error);
        }
    }));
