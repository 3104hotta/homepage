var express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))

var model = require("../../service/db/model/Blog");
var Blog = model.Blog;

router.post('/', (req, res) => {
    Blog.remove({_id:req.body.id}, function(err, docs) {
    });
    Blog.find({}, function(err, docs) {
        res.render('index');
    });
});

module.exports = router;