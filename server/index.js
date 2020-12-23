const express = require('express');
const path = require('path');
const axios = require('axios');
const database = require('../database/index');
const sleeper = require('../helpers/sleeper');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/user', (req, res) => {
  const leagueID = 519340293031415808;
  sleeper
    .getUsers(leagueID)
    .then((userInfo) => {
      userInfo.forEach((user) => {
        const document = new database.User({
          userID: user.user_id,
          teamName: user.metadata.team_name,
          displayName: user.display_name,
          avatar: user.avatar,
        });
        document.save((err, data) => {
          if (err) {
            console.log(`Error saving data: ${err}`);
          } else {
            console.log(`Success saving data: ${data}`);
          }
        });
      });
      database
        .sendUsers()
        .then((allUsers) => {
          res.status(200).json(allUsers);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.get('/test', (req, res) => {
  const config = {
    method: 'get',
    url: 'https://api.sleeper.app/v1/league/519340293031415808/',
    headers: {
      Cookie: '__cfduid=d3d2cd7b14811981c750a4389b0648a5d1608064896',
    },
  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('/rosters', (req, res) => {
  const leagueID = 519340293031415808;
  sleeper
    .getRosters(leagueID)
    .then((rosterInfo) => {
      rosterInfo.forEach((roster) => {
        const document = new database.Rosters({
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
        document.save((err, data) => {
          if (err) {
            console.log(`Error saving data: ${err}`);
          } else {
            console.log(`Success saving data: ${data}`);
          }
        });
      });
      res.status(201).send('updated rosters');
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.get('/league', (req, res) => {
  const leagueID = 519340293031415808;
  sleeper
    .getLeagueInfo(leagueID)
    .then((leagueInfo) => {
      leagueInfo.forEach((league) => {
        const document = new database.Rosters({
          leagueName: league.name,
          divisionName1: league.metadata.division_1,
          divisionName2: league.metadata.division_2,
          divisionAvatar1: league.metadata.division_1_avatar,
          divisionAvatar2: league.metadata.division_2_avatar,
        });
        document.save((err, data) => {
          if (err) {
            console.log(`Error saving data: ${err}`);
          } else {
            console.log(`Success saving data: ${data}`);
          }
        });
      });
      res.status(201).send('updated league');
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.get('/matchups', (req, res) => {
  const leagueID = 519340293031415808;
  for (let i = 1; i <= 17; i += 1) {
    const weekNum = i;
    sleeper
      .getMatchups(leagueID, weekNum)
      .then((matchUpInfo) => {
        matchUpInfo.forEach((week) => {
          const document = new database.Rosters({
            rosterID: week.roster_id,
            matchupID: week.matchup_id,
            matchupPoints: week.points,
          });
          document.save((err, data) => {
            if (err) {
              console.log(`Error saving data: ${err}`);
            } else {
              console.log(`Success saving data: ${data}`);
            }
          });
        });
        res.status(201).send(`updated week ${i} matchups`);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
});

app.listen(process.env.PORT || 3005);
