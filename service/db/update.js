var express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

router.post('/', (req, res) => {
    const json = {
        id: req.body.id,
        data: req.body.data,
        status: 'edit'
    };
    console.log('/update/ :' +  json.data);
    res.render('index', json);
});

router.post('/confirm', (req, res) => {
    const json = {
        id: req.body.id,
        data: req.body.data,
        status: 'edited'
    };

    console.log('/update/confirm/ :' +  json.data);
    res.render('index', json);
});

var model = require("../../service/db/model/Blog");
var Blog = model.Blog;

router.post('/save', (req, res) => {
    Blog.update(
        {_id: req.body.id},
        {$set: {content: req.body.data}},
        function(err) {
            if (err) throw err;
        }
    );
    res.render('index', {status: 'saved'});
});

module.exports = router;