var myAchievements = require('.././badges.json');

var achievements = myAchievements;

exports.achievements = ( req, res ) => {
  res.render("./pages/achievements/index", {

    title : "Your Achievements",

    achievements : achievements

  });
};