const mongoose = require('mongoose');
const Leagues = require('./models/leagues');
const Matchups = require('./models/matchups');
const Rosters = require('./models/rosters');
const Users = require('./models/users');

mongoose.connect('mongodb://localhost/sleeper', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', (callback) => {
  console.log('Connection Succeeded.');
});

const League = mongoose.model('League', Leagues.leagueSchema);
const Matchup = mongoose.model('Matchup', Matchups.matchupSchema);
const Roster = mongoose.model('Roster', Rosters.rosterSchema);
const User = mongoose.model('User', Users.userSchema);

module.exports.League = League;
module.exports.Matchup = Matchup;
module.exports.Roster = Roster;
module.exports.User = User;
