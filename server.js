const path = require('path');
const express = require('express');
const apiMocker = require('connect-api-mocker');
const app = express();
const http = require('http');
const fetch = require('node-fetch');
const axios = require('axios');
const bodyParser = require("body-parser");
const jsStringEscape = require('js-string-escape')
const openBrowser = require('react-dev-utils/openBrowser');
const actionEndpoint ='/getStuff';
const webEndpoint = 'http://testThis.org';
let currentSubscription = {
		"plan": "good",
  		"name": "Good",
  		"seats": 5,
  		"cost":  50
}
const PLAN_COSTS = {
  basic:  1,
  good:   10,
  better: 100,
  best:   1000
}

const PLAN_NAMES = {
  basic:  'Basic',
  good:   'Good',
  better: 'Better',
  best:   'Best'
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
if (openBrowser('http://localhost:8080')) {
    console.log('The browser tab has been opened!');
}

app.get('/api/current', (req, res) => {
    debugger;
    res.send(currentSubscription);
});

app.put('/api/current', (req, res) => {
    currentSubscription = res.data;
});

const getPreviewData = (preview) => {
	const responseText = {
      plan:  preview.plan,
      name:  PLAN_NAMES[preview.plan],
      seats: preview.seats,
      cost:  preview.seats * PLAN_COSTS[preview.plan]      
    };

    return responseText;
}
app.post('/api/current', (req, res) => {
	res.send(this.getPreviewData(req.data));
});