const mongoose = require( 'mongoose' );

const badgeSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true
  },
  image : {
    type : String,
    required : true
  },
  title : {
    type : String,
    required : true
  },
  collected : {
    type : Boolean,
    required : true
  }
});

module.exports = mongoose.model( 'Badge', badgeSchema);