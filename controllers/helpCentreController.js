exports.helpCentre = ( req, res ) =>{
	res.render('./pages/help-centre/index', {
    title : "How can we help you?"
  });

}

exports.passwordReset = ( req, res ) =>{
	res.render('./pages/help-centre/default', {
    title : "Change your password"
  });

}