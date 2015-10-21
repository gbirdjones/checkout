var React = require('react');
var Backbone = require('backbone');
var Checkout = require('./Checkout.js');
// var PlaceCheck = document.getElementById('right-column');

module.exports = React.createClass({
	render: function () {
		return (
			<div className="home-container">
				<div className="left-column">
					<h1> Welcome, you can begin adding items to self checkout on the right.</h1>
					<p>CheckYourself was developed by a small band of forest-dwelling neanderthals on the outskirts of Portland, OR.</p>
				</div>
				<div className="right-column">
					<Checkout />
				</div>
			</div>
			);
	}
});