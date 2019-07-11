const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const fetch = require('node-fetch');
const axios = require('axios');
const bodyParser = require("body-parser");
const jsStringEscape = require('js-string-escape')
const openBrowser = require('react-dev-utils/openBrowser');
const actionEndpoint ='/getStuff';
const webEndpoint = 'http://testThis.org';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
if (openBrowser('http://localhost:8080')) {
    console.log('The browser tab has been opened!');
}

app.get(actionEndpoint, (req, res) => {
    debugger;
    axios.get(webEndpoint)
        .then(response => {
           //handle stuff
        }).catch(error => {
            console.log(error);
        });
});