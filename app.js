const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// const db_insert = require('./service/db/db_insert');

app.set("view engine", "ejs");
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/post', function(req, res) {
    const json = {
        data: req.body.data,
        status: 'inputted'
    };
    res.render('index', json);
});

app.use('/save', require('./service/db/create'));

app.use('/view', require('./service/db/read'));

app.use('/update', require('./service/db/update'));

app.use('/delete', require('./service/db/delete'));



app.listen(3000, function() {
    console.log('app listening on port 3000');
});