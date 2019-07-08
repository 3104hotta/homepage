const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// const db_insert = require('./service/db/db_insert');

app.set("view engine", "ejs");
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/post', function(req, res) {
    const inputData = req.body.inputData;
    res.render('index',{inputData:inputData});
})

app.use('/save', require('./service/db/create'))

app.use('/view', require('./service/db/read'))

app.listen(3000, function() {
    console.log('app listening on port 3000');
});