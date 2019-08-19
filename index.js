//@ToDo: Setup ESLint and Prettier
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

// Setup app
const app = express();

// Setup Passport Google OAuth 2.0 strategy
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log('Access token: ', accessToken)
  console.log('Refresh token: ', refreshToken)
  console.log('Profile: ', profile)
}));

// Authentication Route
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

// Authentication route callback with passport google code
app.get('/auth/google/callback', passport.authenticate('google'))

/* 
@ToDo: Promise based get request to improve performance,
add a generator to loop the requested as Promises
const getPath = (path) => {
  return new Promise((resolve, reject) => {
    app.get(path, (req, res) => {
      resolve(res.send({ hi: 'there' }))
    })
  })
}
const getPaths = async () => {
  await getPath('/');
  console.log('Got path /')
} 
getPaths();

*/


// Env variables are injected by Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
