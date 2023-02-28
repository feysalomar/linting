const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'Home Page';
  res.render('pages/index',{'title':title});
});
app.get('/about', (req, res) => {
  var title = 'About Page';
  res.render('pages/about',{'title':title});
});
app.get('/contacts', (req, res) => {
  var title = 'Contacts Page';
  res.render('pages/contacts',{'title':title});
});
app.get('/projects', (req, res) => {
  var title = 'Projects Page';
  res.render('pages/projects',{'title':title});
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

