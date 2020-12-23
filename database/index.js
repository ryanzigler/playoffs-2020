const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/sleeper', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

const userSchema = new Schema({
  userID: Number,
  teamName: String,
  displayName: String,
  avatar: String,
});

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

const leagueSchema = new Schema({
  leagueName: String,
  divisionName1: String,
  divisionName2: String,
  divisionAvatar1: String,
  divisionAvatar2: String,
});

const matchupSchema = new Schema({
  rosterID: Number,
  matchupID: Number,
  matchupPoints: Number,
});

const User = mongoose.model('User', userSchema);
const Rosters = mongoose.model('Rosters', rosterSchema);
const League = mongoose.model('League', leagueSchema);
const Matchup = mongoose.model('Matchup', matchupSchema);

const sendUsers = () => {
  return User.find();
};

module.exports.User = User;
module.exports.Rosters = Rosters;
module.exports.League = League;
module.exports.Matchup = Matchup;
module.exports.sendUsers = sendUsers;
