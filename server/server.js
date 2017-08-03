const express = require('express');
const app = express();
const controller = require('./controllers');
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/../public'));

app.post('/addUsers/:username/:password/:email', controller.postFormOne );
app.post('/addFormTwo/:id/:firstName/:lastName/:phoneNumber', controller.postFormTwo);
app.post('/addFormThree/:id/:address/:city/:state/:zip', controller.postFormThree);
app.get('/getUserID', controller.getUserID);
app.get('/', (req,res) => {
  res.sendStatus(200);
});
app.listen(app.get('port'), () => {
  console.log(`Server running at port ${app.get('port')}`);
});