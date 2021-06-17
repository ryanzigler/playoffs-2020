import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
// import mockLeagueData from './tempData/leagueData.json';
// import rosterData from './tempData/rosterData.json';
// import userData from './tempData/userData.json';
// import wk1 from './tempData/wk1.json';
// import wk2 from './tempData/wk2.json';
// import wk3 from './tempData/wk3.json';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [leagueData, setLeagueData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [rosterData, setRosterData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [matchupData, setMatchupData] = useState([]);

  // useEffect(() => {
  //   const leagueID = '519340293031415808';
  //   const leagueAPI = `https://api.sleeper.app/v1/league/${leagueID}/`;
  //   const rosterAPI = `https://api.sleeper.app/v1/league/${leagueID}/rosters`;
  //   const userAPI = `https://api.sleeper.app/v1/league/${leagueID}/users`;
  //   const getLeagueAPI = axios.get(leagueAPI);
  //   const getRosterAPI = axios.get(rosterAPI);
  //   const getUserAPI = axios.get(userAPI);

  //   axios
  //     .all([getLeagueAPI, getRosterAPI, getUserAPI])
  //     .then(
  //       axios.spread((...responses) => {
  //         setLeagueData(responses[0]);
  //         setRosterData(responses[1]);
  //         setUserData(responses[2]);

  //         console.log(setLeagueData, setRosterData, setUserData);
  //       })
  //     )
  //     .catch((error) => {
  //       // eslint-disable-next-line
  //       console.log(error, 'Error getting league data');
  //     });
  // }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/standings">Standings</Link>
            </li>
            <li>
              <Link to="/playoffs">Playoffs</Link>
            </li>
            <li>
              <Link to="/playoff-scenarios">Playoff Scenarios</Link>
            </li>
            <li>
              <Link to="/league-dues">League Dues</Link>
            </li>
            <li>
              <Link to="/rules">League Rules</Link>
            </li>
            <li>
              <Link to="/stats">Stats</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/standings">
            <Standings />
          </Route>
          <Route path="/playoffs">
            <Playoffs />
          </Route>
          <Route path="/playoff-scenarios">
            <PlayoffScenatios />
          </Route>
          <Route path="/league-dues">
            <LeagueDues />
          </Route>
          <Route path="/league-rules">
            <LeagueRules />
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
