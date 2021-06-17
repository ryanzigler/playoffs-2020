const mongoose = require('mongoose');

const { Schema } = mongoose;

const matchupSchema = new Schema({
  rosterID: Number,
  matchupID: Number,
  matchupPoints: Number,
});

module.exports.matchupSchema = matchupSchema;
