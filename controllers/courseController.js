var myCourses = require('.././json/courses.json');

var courses = myCourses;

exports.coursesLoop = ( req, res ) => {
  res.render('./pages/courses/index', {
    courses : courses
  });
}

exports.coursesSingle = ( req, res ) => {

  var slug = req.params.id;

  for (var i = 0; i < courses.length; i++) {

    if ( slug == courses[i].permalink ) {

      var title = courses[i].courseName;
      var pemalink = courses[i].permalink;
      var course_thumbnail = courses[i].course_thumbnail;
      var course_heroImage = courses[i].course_heroImage;
      var content = courses[i].content;
      var completed = courses[i].completed;
      var topic = courses[i].topic;

      res.render('./pages/courses/courseSingle', {
        courses : courses,
        title : title,
        pemalink : pemalink,
        course_thumbnail : course_thumbnail,
        course_heroImage : course_heroImage,
        content : content,
        topic : topic,
        completed : completed
      });
    }
  }
}

exports.coursesCapsules = ( req, res ) => {

  var page_id = req.params.id;
  var parent_page = req.params.permalink;

  for(var i = 0; i < courses.length; i++) {

    if ( parent_page == courses[i].permalink ) {

      var courses_permalink = courses[i].permalink;
      var topic = courses[i].topic;

      for(var e = 0; e < topic.length; e++) {

        if( page_id == topic[e].permalink ) {

          var capsules = topic[e].capsule;
          var title = topic[e].topic_name;
          var topic_image = topic[e].topic_image
          var content = topic[e].topic_content
          var topic_permalink = topic[e].permalink

          res.render('./pages/capsules/index', {

            capsules : capsules,
            title : title,
            topic_image : topic_image,
            content : content,
            topic_permalink : topic_permalink,
            courses_permalink : courses_permalink

          });
        }
      }
    }
  }
}

exports.singleCapsule = ( req, res ) => {

  var courses_permalink = req.params.courses_permalink;
  var topic_permalink = req.params.topic_permalink;
  var capsule_permalink = req.params.id;

  for ( var i = 0; i < courses.length; i++ ) {

    if ( courses_permalink == courses[i].permalink ) {

      var topic = courses[i].topic;

      for ( var e = 0; e < topic.length; e++ ) {

        if ( topic_permalink == topic[e].permalink ) {

          var capsules = topic[e].capsule;

          for ( var t = 0; t < capsules.length; t++ ) {

            if ( capsule_permalink == capsules[t].capsule_permalink ) {

              var title = capsules[t].capsule_Name;
              var time_to_complete = capsules[t].time_to_complete;
              var content = capsules[t].capsule_content;
              var content_type = capsules[t].content_type;

              if ( content_type == "Presentations and Slideshares" ) {

                res.render('./pages/content-types/presentations_slideshares',{
                  capsules : capsules,
                  courses_permalink : courses_permalink,
                  topic_permalink : topic_permalink,
                  title : title,
                  time_to_complete : time_to_complete,
                  content_type : content_type,
                  content : content
                });

              } else if( content_type == "Charts and Graphs" ) {

                res.render('./pages/content-types/charts_graphs',{
                  capsules : capsules,
                  courses_permalink : courses_permalink,
                  topic_permalink : topic_permalink,
                  title : title,
                  time_to_complete : time_to_complete,
                  content_type : content_type,
                  content : content
                });

              } else if( content_type == "Webinars and Events" ) {

                res.render('./pages/content-types/webinars_events',{
                  capsules : capsules,
                  courses_permalink : courses_permalink,
                  topic_permalink : topic_permalink,
                  title : title,
                  time_to_complete : time_to_complete,
                  content_type : content_type,
                  content : content
                });

              } else if( content_type == "audio" ) {

                var capsule_podcast = capsules[t].capsule_podcast;
                var capsule_podcast_cover = capsules[t].capsule_podcast_cover;

                res.render('./pages/content-types/audio',{
                  capsules : capsules,
                  courses_permalink : courses_permalink,
                  topic_permalink : topic_permalink,
                  title : title,
                  time_to_complete : time_to_complete,
                  content_type : content_type,
                  capsule_podcast : capsule_podcast,
                  capsule_podcast_cover : capsule_podcast_cover,
                  content : content
                });

              } else if( content_type == "Game" ) {

                res.render('./pages/content-types/game',{
                  capsules : capsules,
                  courses_permalink : courses_permalink,
                  topic_permalink : topic_permalink,
                  title : title,
                  time_to_complete : time_to_complete,
                  content_type : content_type,
                  content : content
                });

              } else if( content_type == "Case Study" ) {

                res.render('./pages/content-types/case_study',{
                  capsules : capsules,
                  courses_permalink : courses_permalink,
                  topic_permalink : topic_permalink,
                  title : title,
                  time_to_complete : time_to_complete,
                  content_type : content_type,
                  content : content
                });

              } else if( content_type == "Static Video" ) {

                res.render('./pages/content-types/static_video',{
                  capsules : capsules,
                  courses_permalink : courses_permalink,
                  topic_permalink : topic_permalink,
                  title : title,
                  time_to_complete : time_to_complete,
                  content_type : content_type,
                  content : content
                });

              } else if( content_type == "Dynamic Video" ) {

                res.render('./pages/content-types/dynamic_video',{
                  capsules : capsules,
                  courses_permalink : courses_permalink,
                  topic_permalink : topic_permalink,
                  title : title,
                  time_to_complete : time_to_complete,
                  content_type : content_type,
                  content : content
                });

              } else if( content_type == "Infographic" ) {

                var capsule_infographic_image = capsules[t].capsule_infographic_image;

                res.render('./pages/content-types/infographic',{
                  capsules : capsules,
                  courses_permalink : courses_permalink,
                  topic_permalink : topic_permalink,
                  title : title,
                  time_to_complete : time_to_complete,
                  content_type : content_type,
                  capsule_infographic_image : capsule_infographic_image,
                  content : content
                });

              } else if( content_type == "Problem Solving and Simulations" ) {

                res.render('./pages/content-types/problem_solving',{
                  capsules : capsules,
                  courses_permalink : courses_permalink,
                  topic_permalink : topic_permalink,
                  title : title,
                  time_to_complete : time_to_complete,
                  content_type : content_type,
                  content : content
                });

              } else if( content_type == "Checklists" ) {

                res.render('./pages/content-types/checklists',{
                  capsules : capsules,
                  courses_permalink : courses_permalink,
                  topic_permalink : topic_permalink,
                  title : title,
                  time_to_complete : time_to_complete,
                  content_type : content_type,
                  content : content
                });

              } else if( content_type == "Text and Articles" ) {

                res.render('./pages/content-types/text_articles',{
                  capsules : capsules,
                  courses_permalink : courses_permalink,
                  topic_permalink : topic_permalink,
                  title : title,
                  time_to_complete : time_to_complete,
                  content_type : content_type,
                  content : content
                });

              } else if( content_type == "eBooks and manuals" ) {

                var capsule_ebook_cover = capsules[t].capsule_ebook_cover;
                var capsule_ebook_link = capsules[t].capsule_ebook_link;

                res.render('./pages/content-types/ebooks_manuals',{
                  capsules : capsules,
                  courses_permalink : courses_permalink,
                  topic_permalink : topic_permalink,
                  title : title,
                  time_to_complete : time_to_complete,
                  content_type : content_type,
                  capsule_ebook_cover : capsule_ebook_cover,
                  capsule_ebook_link : capsule_ebook_link,
                  content : content
                });

              } else if( content_type == "Polls and Surveys" ) {

                res.render('./pages/content-types/polls_surveys',{
                  capsules : capsules,
                  courses_permalink : courses_permalink,
                  topic_permalink : topic_permalink,
                  title : title,
                  time_to_complete : time_to_complete,
                  content_type : content_type,
                  content : content
                });

              } else if( content_type == "Assessments" ) {

                res.render('./pages/content-types/assessments',{
                  capsules : capsules,
                  courses_permalink : courses_permalink,
                  topic_permalink : topic_permalink,
                  title : title,
                  time_to_complete : time_to_complete,
                  content_type : content_type,
                  content : content
                });

              } else {

                res.render('./pages/capsules/capsule_single', {

                  title : title,
                  time_to_complete : time_to_complete,
                  content_type : content_type,
                  content : content

                });
              }
            }
          }
        }
      }
    }
  }
}