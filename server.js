const path = require('path');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const openBrowser = require('react-dev-utils/openBrowser');

/*
  Used to keep track of the user's current subscription.
  Defaults to this
*/
let currentSubscription = {
  plan: 'good',
  name: 'Good',
  seats: 5,
  price: 50,
};
/*
  Used to for cost of each seat based on a given plan.
  Defaults to this
*/
const PLAN_COSTS = {
  basic: 1,
  good: 10,
  better: 100,
  best: 1000,
};

/*
  Used for plan list values
  Defaults to this
*/
const PLAN_NAMES = {
  basic: 'Basic',
  good: 'Good',
  better: 'Better',
  best: 'Best',
};

// Used for populating plan list that is actually returned to the front end
const planNamesArray = Object.keys(PLAN_NAMES).map(key => ({ value: key, label: PLAN_NAMES[key] }));

// used to parse JSON  data for requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

if (openBrowser('http://localhost:8080')) {
  console.log('The browser tab has been opened!');
}
// used to get current subscription
app.get('/api/current', (req, res) => {
  res.send({ currentSubscription, planNames: planNamesArray });
});

/*
  used to update current subscription
  returns old subscription for comparison purposes as well as the new one
  Reassigns currentSubscription to the new values
*/
app.put('/api/current', (req, res) => {
  const oldSubscription = { ...currentSubscription };
  currentSubscription = { ...req.body.newSubscriptionData };
  res.send({ oldSubscription, newSubscription: currentSubscription });
});

/*
  used to calculate new price based on number of seats
  and the current plan the user has
*/
const getPreviewData = (preview) => {
  const responseText = {
    plan: preview.plan,
    name: PLAN_NAMES[preview.plan],
    seats: preview.seats,
    price: preview.seats * PLAN_COSTS[preview.plan],
  };

  return responseText;
};

/*
  returns new values of subscription as user modifies them
*/
app.post('/api/preview', (req, res) => {
  const { previewData } = req.body;
  res.send(getPreviewData(previewData));
});
