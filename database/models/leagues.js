const mongoose = require('mongoose');

const { Schema } = mongoose;

const leagueSchema = new Schema({
  leagueName: String,
  divisionName1: String,
  divisionName2: String,
  divisionAvatar1: String,
  divisionAvatar2: String,
  season: Number,
});

module.exports.leagueSchema = leagueSchema;
