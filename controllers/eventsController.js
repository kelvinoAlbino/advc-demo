var myEvents = require('.././events.json');

var events = myEvents;

exports.events = ( req, res ) => {

  res.render('./pages/events/index', {events : events} );

}

exports.eventsSingle = ( req, res ) => {

  var slug = req.params.id;

  for (var i = 0; i < events.length; i++) {

    if ( slug == events[i].permalink ) {

      var title = events[i].title;
      var pemalink = events[i].permalink;
      var heroImage = events[i].heroImage;
      var backgroundImage = events[i].backgroundImage;
      var content = events[i].content;

      res.render('./pages/events/eventsSingle', {
        events : events,
        title : title,
        pemalink : pemalink,
        heroImage : heroImage,
        backgroundImage : backgroundImage,
        content : content
      });
    }
  }
}