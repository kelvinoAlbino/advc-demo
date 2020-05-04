var myNews = require('.././news.json');

var news = myNews;

exports.news = ( req, res ) => {

  res.render('./pages/news/index', {news : news} );

}

exports.newsSingle = ( req, res ) => {

  var slug = req.params.id;

  for (var i = 0; i < news.length; i++) {

    if ( slug == news[i].permalink ) {

      var title = news[i].title;
      var pemalink = news[i].permalink;
      var heroImage = news[i].heroImage;
      var backgroundImage = news[i].backgroundImage;
      var content = news[i].content;

      res.render('./pages/news/newsSingle', {
        news : news,
        title : title,
        pemalink : pemalink,
        heroImage : heroImage,
        backgroundImage : backgroundImage,
        content : content
      });
    }
  }
}
