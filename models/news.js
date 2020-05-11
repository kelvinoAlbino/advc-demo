const mongoose = require( 'mongoose' );

const newsSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true
  },
  permalink : {
    type : String,
    required : true
  },
  heroImage : {
    type : String,
    required : false
  },
  backgroundImage : {
    type : String,
    required : false
  },
  content : {
    type : String,
    required : false
  }
});

module.exports = mongoose.model( 'News', newsSchema);