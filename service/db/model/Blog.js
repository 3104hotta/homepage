var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    content: String,
},{ collection: 'BlogCollection'});

// MongoDBへの接続
mongoose.connect('mongodb://localhost:27017/Blog',{useNewUrlParser: true});

exports.Blog = mongoose.model('Blog', BlogSchema);