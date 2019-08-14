//@ToDo: Setup ESLint and Prettier
const express = require('express');

const app = express();


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

app.get('/', (req, res) => {
  res.send({ hi: 'there' })
})
// Env variables are injected by Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
