const axios = require('axios');

const getUsers = (leagueID) => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`https://api.sleeper.app/v1/league/${leagueID}/users`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getRosters = (leagueID) => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`https://api.sleeper.app/v1/league/${leagueID}/rosters`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getLeagueInfo = (leagueID) => {
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
};

const getMatchups = (leagueID, week) => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`https://api.sleeper.app/v1/league/${leagueID}/matchups/${week}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports.getUsers = getUsers;
module.exports.getRosters = getRosters;
module.exports.getLeagueInfo = getLeagueInfo;
module.exports.getMatchups = getMatchups;
