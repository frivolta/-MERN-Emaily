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
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  // Create user
  User.findOne({ googleId: profile.id })
    .then((existingUser) => {
      if (existingUser) {
        // we already have a record with the given ID
        done(null, existingUser);
      } else {
        new User({ googleId: profile.id }).save()
          .then(user => done(null, user));
      }
    })
}));
