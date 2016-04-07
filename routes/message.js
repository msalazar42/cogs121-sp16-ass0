var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body);
    var newMessage = new models.Message(req.body);
    newMessage.save(afterSaving);

	function afterSaving(err) { // this is a callback
  		if(err) {console.log(err); res.send(500); }
  		res.redirect('/');
  	}
};