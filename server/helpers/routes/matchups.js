const axios = require('axios');

const sleeperAPI = (leagueID, week) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'get',
      url: `https://api.sleeper.app/v1/league/${leagueID}/matchups/${week}`,
      headers: {
        Cookie: '__cfduid=d3d2cd7b14811981c750a4389b0648a5d1608064896',
      },
    };
    return axios(config)
      .then((sleeperResponse) => {
        resolve(sleeperResponse.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports.sleeperAPI = sleeperAPI;
