const mongoose = require('mongoose');

const { Schema } = mongoose;

const rosterSchema = new Schema({
  userID: Number,
  rosterID: Number,
  wins: Number,
  ties: Number,
  losses: Number,
  pointsFor: Number,
  pointsForDecimal: Number,
  pointsAgainst: Number,
  pointsAgainstDecimal: Number,
  division: Number,
});

module.exports.rosterSchema = rosterSchema;
