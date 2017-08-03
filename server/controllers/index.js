const bcrypt = require('bcrypt');
const pg = require('pg');
const saltRounds = 10;
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.DATABASE_URL,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    charset: 'utf8'
  }
});
const bookshelf = require('bookshelf')(knex);
const Users = bookshelf.Model.extend({
  tableName: 'users'
});

module.exports = {
  postFormOne: ((req, res) => {
    pg.connect(process.env.DATABASE_URL, (err, client, done) => {
      console.log('in pg connect');
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
    })
  }),
  postFormTwo: ((req, res) => {
    let id = req.params.id;
    let firstName = req.params.firstName;
    let lastName = req.params.lastName;
    let phoneNumber = req.params.phoneNumber;
    Users.forge().where({id: id}).save({firstname: firstName, lastname: lastName, phonenumber: phoneNumber}, {method: 'update'});
    res.sendStatus(200);
  }),
  postFormThree: ((req, res) => {
    let id = req.params.id;
    let address = req.params.address;
    let city = req.params.city;
    let state = req.params.state;
    let zip = req.params.zip;
    Users.forge().where({id: id}).save({address: address, city: city, state: state, zip: zip}, {method: 'update'});
    res.sendStatus(200);
  }),
  getUserID: ((req, res) => {
    Users.forge().orderBy('id', 'DESC').fetch()
    .then((rows) => {
      res.send(rows.id);
    });
  })
}