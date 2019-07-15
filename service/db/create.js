var express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))

var model = require("../../service/db/model/Blog");
var Blog = model.Blog;

router.post('/', (req, res, next) => {
    var documents = new Blog({
        content: req.body.data
    });

    documents.save(function (err) {
        if (err) throw err;
    });

    console.log(req.body.data);

    const json = {
        data: req.body.data,
        status: 'saved'
    }

    res.render('index',json);
    next()
});

module.exports = router;