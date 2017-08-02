const express = require('express');

const app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/../public'));

app.get('/', (req,res) => {
  res.sendStatus(200);
});

app.listen(app.get('port'), () => {
  console.log(`Server running at port ${app.get('port')}`);
});