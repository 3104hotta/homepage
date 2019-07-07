var express = require('express');
const router = express.Router();

var blog = require("../../service/db/model/Blog");

router.post('/', (req, res, next) => {
    var documents = new blog();
    console.log(req.body);
    documents.find({}, function(err, docs) {
        for (var i=0, size=docs.length; i<size; ++i) {
            docs[i].doc
        }
    });
    res.render('body/read.ejs');
    next()
});

module.exports = router;