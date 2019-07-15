var express = require('express');
const router = express.Router();

var model = require("../../service/db/model/Blog");
var Blog = model.Blog;

router.post('/', (req, res) => {
    Blog.find({}, function(err, docs) {
        const json = {
            docs: docs,
            status: 'view'
        };
        res.render('index', json);
    });
});

module.exports = router;