const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

// Passport set cookie and pass to client
passport.serializeUser((user, done) => {
  done(null, user.id)
})
// Passport deserialize user id from cookie
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
})

// Setup Passport Google OAuth 2.0 strategy
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
}, async (accessToken, refreshToken, profile, done) => {
  // Create user
  const existingUser = await User.findOne({ googleId: profile.id })
  if (existingUser) {
    // we already have a record with the given ID
    return done(null, existingUser);
  }
  const user = await new User({ googleId: profile.id }).save()
  done(null, user)
}));
