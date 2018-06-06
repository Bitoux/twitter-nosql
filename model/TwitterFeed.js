const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

// Définition du schéma
const TwitterFeed = new Schema({
    name: {type: String, required: true},
    status: {type: String, enum: ['todo', 'inProgress', 'done'], default: 'todo', required: true}
  }, 
  {timestamps: true} // Pour avoir les dates de création et de modification automatiquement gérés par mongoose
);

let Twitter = mongoose.model('Twitter', TwitterFeed);

module.exports = TodoItemSchema; // Export du schéma