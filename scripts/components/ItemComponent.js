var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function () {
		console.log(this.props.items);
		return (
			<div className="one-item">
				<p>Name: {this.props.items.name}</p>
				<p>Price: {this.props.items.price}</p>
				<p>Amount: {this.props.items.amount}</p>
			</div>
			);
	}
});