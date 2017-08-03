const express = require('express');
const bcrypt = require('bcrypt');
const saltRounds = 10;
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
const app = express();
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/../public'));

app.post('/addUsers/:username/:password/:email', (req, res) => {
  console.log('fadfdad');
  let username = req.params.username;
  let password = req.params.password;
  let email = req.params.email;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      new Users({username: username, password: hash, email: email}).save().then((model) => {
        res.send(hash);
      })
    })
  })
  console.log(`${username} ${password}`)
  //Users.save({username: req.params.username, password: req.params.password});
  
});

app.post('/addFormTwo/:id/:firstName/:lastName/:phoneNumber', (req, res) => {
  let id = req.params.id;
  let firstName = req.params.firstName;
  let lastName = req.params.lastName;
  let phoneNumber = req.params.phoneNumber;
  Users.forge().where({id: id}).save({firstname: firstName, lastname: lastName, phonenumber: phoneNumber}, {method: 'update'});
  res.sendStatus(200);
})

app.post('/addFormThree/:id/:address/:city/:state/:zip', (req, res) => {
  let id = req.params.id;
  let address = req.params.address;
  let city = req.params.city;
  let state = req.params.state;
  let zip = req.params.zip;
  Users.forge().where({id: id}).save({address: address, city: city, state: state, zip: zip}, {method: 'update'});
  res.sendStatus(200);
})

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