var router = require('express').Router();
var indexController = require('.././controllers/indexController');
var dashboardController = require('.././controllers/dashboardController');
var courseController = require('.././controllers/courseController');
var newsController = require('.././controllers/newsController');
var eventsController = require('.././controllers/eventsController');
var registerController = require('.././controllers/registerController');
var helpCentreController = require('.././controllers/helpCentreController');
var achievementsController = require('.././controllers/achievementsController');
var emailerController = require('.././controllers/emailerController');

router.get('/', dashboardController.dashboard );

//dashboard
router.get('/dashboard/', dashboardController.dashboard );
router.get('/dashboard/members', dashboardController.memberDashboard );
router.get('/dashboard/client', dashboardController.clientDashboard );

//courses
router.get('/courses/', courseController.coursesLoop);

router.get('/courses/:id', courseController.coursesSingle);
//cources/topics
router.get('/courses/:permalink/:id', courseController.coursesCapsules);
//cources/topics/capsule
router.get('/courses/:courses_permalink/:topic_permalink/:id?', courseController.singleCapsule);

//news
router.get('/news/', newsController.news);
router.get('/news/:id', newsController.newsSingle);

//events
router.get('/events/', eventsController.events);
router.get('/events/:id', eventsController.eventsSingle);
router.get('/events/:pemalink/register', registerController.register);

//achievement
router.get('/achievements/', achievementsController.achievements);

router.get('/help-centre/', helpCentreController.helpCentre);
router.get('/help-centre/changeyour-password', helpCentreController.passwordReset);

router.get('/emailer/', emailerController.emailer);

module.exports = router;