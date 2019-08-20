const passport = require('passport')

module.exports = app => {
  // Authentication Route
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

  // Authentication route callback with passport google code
  app.get('/auth/google/callback', passport.authenticate('google'))

  // Logout user
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user)
  })
  // Test current logged user
  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })
}


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