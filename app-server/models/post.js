var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    is_published: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Post', PostSchema);