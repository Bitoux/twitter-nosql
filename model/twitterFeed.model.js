const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

// Définition du schéma
const TwitterFeed = new Schema({
  id: {type: Number, required: true}, 
  created_at: {type: String, required: true}, 
  retweet_count: {type: Number, required: false}, 
  favorite_count: {type: Number, required: false}, 
  followers_count: {type: Number, required: false}, 
  friends_count: {type: Number, required: false},
  country: {type: String, required: false},
  lang: {type: String, required: false}
  }, 
  {timestamps: true} // Pour avoir les dates de création et de modification automatiquement gérés par mongoose
);

let Twitter = mongoose.model('Twitter', TwitterFeed);

module.exports = Twitter; // Export du schéma