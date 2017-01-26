var React = require('react');
import SocialConfig from './config/social_feed_config'

var recentnews = React.createClass({

	componentDidMount(){
		SocialConfig.template = '/templates/template.html';
		SocialConfig.callback = function(){
	      $('.social-feed-container').isotope({
	        // options
	        itemSelector: '.social-media',
	      });
	  	};
	    $('.social-feed-container').socialfeed(SocialConfig);
	    $('.social-feed-container').imagesLoaded( function() {
	      $('.social-feed-container').isotope({
	        // options
	        itemSelector: '.social-media',
	        layoutMode: 'masonry'
	      });
	    });
	},

	render: function() {
		return (
			<section className="container">
			    <h1>Check us out on social media!</h1>
			    <div className="social-media-button-group">
			        <a target="blank" href ="https://www.facebook.com/toolswithimpact"><button className="btn btn-primary text-center"><i className="fa fa-facebook"></i>Facebook</button></a>
			        <a target="blank" href ="https://twitter.com/toolswithimpact"><button className="btn btn-primary text-center"><i className="fa fa-twitter"></i>Twitter</button></a>
			        <a target="blank" href ="https://www.instagram.com/toolswithimpact/"><button className="btn btn-primary text-center"><i className="fa fa-instagram"></i>Instagram</button></a>
			    </div>
			    <div className="social-feed-container"></div>
			</section>
		);
	}

});

module.exports = recentnews;