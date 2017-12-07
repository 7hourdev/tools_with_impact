var React = require('react');
import Contents from 'contents'

var donate = React.createClass({

	render: function() {
		return (
			<section className="container col-md-8 col-md-offset-2">
			  <p>The Donate Now buttons looks kind of small and sketchy, if you could change the size and style that would be great.</p>
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