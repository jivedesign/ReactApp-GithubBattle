var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = '6ac7025bcdb94361a787384848d83364';
var sentryApp = '97229';
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

var _APP_INFO = {
    name: 'Github Battle',
    branch: '4',
    version: '1.0'
}

Raven.config(sentryURL, {
    release: _APP_INFO.version,
    tags: {
        branch: _APP_INFO.branch,
        github_commit: 'adsadsdasd'
    }
}).install();

ReactDOM.render(
    Routes, document.getElementById('app')
);
