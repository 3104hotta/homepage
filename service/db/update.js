var express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))
// app.use(bodyParser.json());

router.post('/', (req, res, next) => {
    console.log(req.body.selectedContent);

    const json = {
        data: req.body.selectedContent,
        status: 'edit'
    };
    res.render('index', json);
});

module.exports = router;