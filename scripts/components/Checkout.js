var React = require('react');
var Backbone = require('backbone');
var ItemComponent = require('./ItemComponent.js');

var items = [];
var counter  = 0;
var showList = '';
var tax = 0;

module.exports = React.createClass({
	render: function () {
		return (
			<div className="checkout-container">
			<div>
				<h1> Enter necessary info for items below</h1>
				<p>Name:</p><input type="text" id="item"placeholder="item name"></input>
				<p>Price:</p><input type="text" id="price"placeholder="price"></input>
				<p>Amount:</p><input type="text" id="amount"placeholder="amount"></input>
			</div>
			<div>
				<button id="submit" onClick={this.addItAll}>Submit</button>
				<button id="clear" onClick={this.clearFields}>Clear All</button>
			</div>
				{showList}
				<div>
					Tax:{tax} Total:{counter}
				</div>
			</div>
			);
	},
	addItAll: function() {
		if ((isNaN(document.getElementById('item').value))&&(!isNaN(document.getElementById('price').value))&&(!isNaN(document.getElementById('amount').value))) {
			var amount  = document.getElementById('amount').value;
			var price = document.getElementById('price').value;
			var pricePlus = +price* +amount;
			tax = +pricePlus*.055;
			var total = +pricePlus+ +tax;
			counter +=total;
			items.push(
				{
					name: document.getElementById('item').value,
					price: document.getElementById('price').value,
					amount: document.getElementById('amount').value,
					tax: tax,
					counter: counter
				});
			console.log(items);
			document.getElementById('item').value = '';
			document.getElementById('price').value = '';
			document.getElementById('amount').value = '';
			showList = items.map( function(item){
				console.log(item);
				return (
					<ItemComponent items={item} />
					);
				})
			this.forceUpdate();
		} else {
			window.alert('Error incorrect data type');
		}
	},
	clearFields: function() {
		items = [];
		counter = 0;
		tax=0;
		console.log(items);
		this.forceUpdate();
	}
});