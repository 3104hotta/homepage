var express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))

router.post('/', (req, res) => {
    const json = {
        data: req.body.selectedContent,
        status: 'edit'
    };
    res.render('index', json);
});

module.exports = router;