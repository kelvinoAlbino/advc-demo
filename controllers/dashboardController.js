var myCourses = require('.././json/courses.json');
var myAchievements = require('.././json/achievements.json');
var myNews = require('.././json/news.json');
var myEvents = require('.././json/events.json');
var myBages = require('.././json/badges.json');

module.exports.dashboard = ( req, res ) => {

  var courses = myCourses;
  var achievements = myAchievements;
  var news = myNews;
  var events = myEvents;

  res.render('./pages/dashboard/index', {
    title: "Dashboard",
    userName: 'Users',
    courses: courses,
    achievements: achievements,
    news: news,
    events: events
  });
}

module.exports.memberDashboard = ( req, res ) => {

  var courses = myCourses;
  var achievements = myAchievements;
  var news = myNews;
  var events = myEvents;
  var badges = myBages;

  res.render('./pages/dashboard/members', {
    title: "Members Dashboard",
    userName: 'Jenny Scott',
    courses: courses,
    achievements: achievements,
    news: news,
    events: events,
    badges : badges
  });
}

module.exports.clientDashboard = ( req, res ) => {

  var courses = myCourses;
  var achievements = myAchievements;
  var news = myNews;
  var events = myEvents;
  var badges = myBages;

  res.render('./pages/dashboard/client', {
    title: "Client Dashboard",
    courses : courses
  });
}