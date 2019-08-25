//@ToDo: Setup ESLint and Prettier
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport')
const bodyParser = require('body-parser')

require('./models/User');
require('./models/Survey');
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
require('./routes/surveyRoutes')(app)

// Production routes
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets like main.js or main.css
  app.use(express.static('client/build'))
  // Express will serve index.html if it doesn't recognize any server route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// MongoDB Atlas Connect with mongoose
mongoose.connect(keys.mongoURI);

// Env variables are injected by Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
