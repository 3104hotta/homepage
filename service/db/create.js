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
        content: req.body.savedData
    });

    documents.save(function (err) {
        if (err) throw err;
    });

    console.log(req.body);
    res.render('index',req.body);
    next()
});

module.exports = router;