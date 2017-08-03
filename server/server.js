const express = require('express');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'admin',
    password: '123',
    database: 'Joey',
    charset: 'utf8'
  }
});
const bookshelf = require('bookshelf')(knex);
const Users = bookshelf.Model.extend({
  tableName: 'users'
});
const { Pool, Client } = require('pg');


const app = express();
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/../public'));

app.post('/addUsers/:username/:password', (req, res) => {
  console.log('fadfdad');
  let username = req.params.username;
  let password = req.params.password
  console.log(`${username} ${password}`)
  //Users.save({username: req.params.username, password: req.params.password});
  new Users({username: username, password: password}).save().then((model) => {
    console.log('fdfd');
  })
  res.sendStatus(200);
});

app.get('/getUserID', (req, res) => {
  Users.forge().orderBy('id', 'DESC').fetch()
    .then((rows) => {
      res.send(rows.id);
    });
});

app.get('/', (req,res) => {
  console.log('fdsfdsaf');
  res.sendStatus(200);
});

app.listen(app.get('port'), () => {
  console.log(`Server running at port ${app.get('port')}`);
});