//@ToDo: Setup ESLint and Prettier
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport')
const bodyParser = require('body-parser')

require('./models/User');
require('./services/passport');

// Setup app
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// Start routes
require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)

// MongoDB Atlas Connect with mongoose
mongoose.connect(keys.mongoURI);

// Env variables are injected by Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
