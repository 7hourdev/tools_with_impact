var React = require('react');

var donate = React.createClass({

	render: function() {
		return (
			<section className="container col-md-8 col-md-offset-2">
			  <p>Thank you for your interest! Tools With Impact is 100% non-profit! We are just a group of dedicated students working towards making a difference. A donation of any sum can have a huge impact on the lives of many.</p>
			  <br />
			    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="text-center">
			        <input type="hidden" name="cmd" value="_s-xclick" />
			        <input type="hidden" name="hosted_button_id" value="M7ZKY9VBHW3QU" />
			        <input type="image" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" src = "https://www.paypalobjects.com/webstatic/en_US/btn/btn_donate_cc_147x47.png"/>
			        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="2" height="2"/>
			    </form>
			</section>
		);
	}

});

module.exports = donate;