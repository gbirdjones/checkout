'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;
var Nav = document.getElementById('nav');
var App = document.getElementById('main');
var Home = require('./components/home.js');

var Router = Backbone.Router.extend({
	routes: {
		'':'home',
	},
	home: function() {
		ReactDOM.render (
			<Home />, App
		);
	}
});

var r = new Router();
Backbone.history.start();









