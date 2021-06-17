const GetLeague = require('./routes/leagues');
const GetMatchups = require('./routes/matchups');
const GetRosters = require('./routes/rosters');
const GetUsers = require('./routes/users');
const Database = require('../../database/index');

const getData = (leagueID) => {
  GetLeague.sleeperAPI(leagueID)
    .then((leagueData) => {
      Database.saveLeague(leagueData);
    })
    .catch((error) => {
      console.log('Error in Database.saveLeague', error);
    });

  // GetMatchups.sleeperAPI(leagueID)
  //   .then((matchupData) => {

  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // GetRosters.sleeperAPI(leagueID)
  //   .then((rosterData) => {

  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // for (let i = 1; i <= 17; i += 1) {
  //   GetMatchups.sleeperAPI(leagueID, i)
  //     .then((matchupData) => {
  //       // parse data
  //       // save data
  //     })
  // }

  // console.log(userData);
  // console.log(rosterData);
  // console.log(week1);
  // console.log(week2);
};

module.exports.getData = getData;
