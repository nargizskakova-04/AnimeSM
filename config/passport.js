const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/user');

module.exports = function(passport) {
  passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      const user = await User.findOne({ email: email.toLowerCase() });

      if (!user) {
        return done(null, false, { message: 'Такой email не зарегистрирован' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (user && isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Неверный пароль' });
      }
    } catch (err) {
      return done(err);
    }
  }));


  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

};
