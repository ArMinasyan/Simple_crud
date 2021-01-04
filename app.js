const express = require('express');
const app = express();

const bodyParser = require('body-parser');

require('./dbConnect');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static('./public'));
//Routes
const user = require('./routes/user');

app.use('/api', user);

app.get('/', (req, res) => {
    res.render('user');
});

const port = 8080;

app.listen(port, () => {
    console.log('Port: ' + port);
})