const Models = require('./models');

const saveUser = (user) => {
  const Team = new Models.User({
    userID: user.user_id,
    teamName: user.metadata.team_name,
    displayName: user.display_name,
    avatar: user.avatar,
  });
  Team.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Team has been saved');
    }
  });
};

const saveRoster = (roster) => {
  const Rosters = new Models.Roster({
    userID: roster.owner_id,
    rosterID: roster.roster_id,
    wins: roster.settings.wins,
    ties: roster.settings.ties,
    losses: roster.settings.losses,
    pointsFor: roster.settings.fpts,
    pointsForDecimal: roster.settings.fpts_decimal,
    pointsAgainst: roster.settings.fpts_against,
    pointsAgainstDecimal: roster.settings.fpts_against_decimal,
    division: roster.settings.division,
  });
  Rosters.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Roster has been saved');
    }
  });
};

const saveLeague = (league) => {
  const Leagues = new Models.League({
    leagueName: league.name,
    divisionName1: league.metadata.division_1,
    divisionName2: league.metadata.division_2,
    divisionAvatar1: league.metadata.division_1_avatar,
    divisionAvatar2: league.metadata.division_2_avatar,
    season: league.season,
  });
  Leagues.save((error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log('League has been saved');
    }
  });
};

const saveMatchup = (matchup) => {
  const Matchups = new Models.Matchup({
    rosterID: matchup.roster_id,
    matchupID: matchup.matchup_id,
    matchupPoints: matchup.points,
  });
  Matchups.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Matchup has been saved');
    }
  });
};

module.exports.saveUser = saveUser;
module.exports.saveRoster = saveRoster;
module.exports.saveLeague = saveLeague;
module.exports.saveMatchup = saveMatchup;
