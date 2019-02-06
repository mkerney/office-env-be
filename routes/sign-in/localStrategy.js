const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const models = require('../../models/index');


module.exports = exports = new LocalStrategy({ usernameField: 'email', passwordField: 'password', passReqToCallback: true },
    (async (req, username, password, done) => {
        try {
            const user = await models.user.findOne({ where: { email: username } });
            if (user) {
                if (user.password) {
                    const decodedPassword = await bcrypt.compare(password, user.password)
                    if (decodedPassword) {
                        done(null, user);
                    } else {
                        done(null, false, { message: 'Password does not match', code: 401 });
                    }
                } else {
                    done(null, false, { message: 'Password does not match' });
                }
            } else {
                done(null, false, { message: 'User is not registered with the system' });
            }
        } catch (error) {
            done(error);
        }
    }));
