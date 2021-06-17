const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  userID: Number,
  teamName: String,
  displayName: String,
  avatar: String,
});

module.exports.userSchema = userSchema;
