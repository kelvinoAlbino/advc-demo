const mongoose = require( 'mongoose' );

const achievementSchema = new mongoose.Schema({
  achievementName : {
    type : String,
    required : true
  },
  permalink : {
    type : String,
    required : true
  },
  title : {
    type : String,
    required : true
  },
  backgroundImage : {
    type : String,
    required : true
  }
});

module.exports = mongoose.model( 'Achievement', achievementSchema);