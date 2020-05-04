var myEvents = require('.././events.json');

exports.register = ( req, res ) =>{

	var pageSlug = req.params.pemalink;
	var eventName = pageSlug.replace(/-/g, " ");
	var events = myEvents;

	//res.send( pageSlug )
	res.render('./pages/register/index', {
		eventName : eventName
	});
	
}