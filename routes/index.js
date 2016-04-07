var models = require('../models');

exports.view = function(req, res) {
    var data = models.Message.find();
    res.render("index", data);
}
