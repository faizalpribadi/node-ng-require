var user = require('../models/user');

exports.get = function(req, res) {
    user.find({}, function(err, users) {
        res.json(users);
    });
};

exports.post = function(req, res) {

};

exports.update = function(req, res) {

};

exports.delete = function(req, res) {

};