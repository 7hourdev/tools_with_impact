import React from 'react';
import {Link} from 'react-router';
import SocialConfig from './config/social_feed_config'

export default React.createClass({
	componentDidMount(){
		$('.carousel').carousel();
		$(".counter").each(function(element){
		  $(this).countTo();
		});
		SocialConfig.template = '/templates/template.html';

	    $('.social-feed-container-small').socialfeed(SocialConfig);
	    $('.social-feed-container-small').imagesLoaded( function() {
	      $('.social-feed-container-small').isotope({
	        // options
	        itemSelector: '.social-media',
	        layoutMode: 'masonry'
	      });
	    });
	},
  	render() {
    return (
	<div>
		<div className="home-slider-section">
			<div className="carousel slide carousel-fade" data-ride="carousel">
		    	<div className="carousel-inner" role="listbox">
		    		<div className="item slide1 active">
			        </div>
			        <div className="item slide2">
					</div>
			        <div className="item slide3">
			        </div>
			        <div className="item slide4">
			        </div>
			        <div className="item slide5">
			        </div>
			        <div className="item slide6">
			        </div>
			        <div className="item slide7">
			        </div>
			        <div className="item slide8">
			        </div>
			        <div className="item slide9">
			        </div>
			        <div className="item slide10">
			        </div>
		        </div>
	        </div>
        	<div className="middle-section">
				<div className="container jumbotron">
					<div className="jumbotron-contents">
						<div className= "col-md-offset-1 col-md-2">
							<img src = "img/logo.png" className= "img-responsive"/>
						</div>
						<div className= "col-md-9">
							<h1>Tools With Impact</h1>
							<h4>Supplying the tools for a better education</h4>
						</div>
					</div>
				</div>
			</div>
      </div>
	<section className=  "container" id = "works">
		<div className= "row text-center">
			<h1 className= "">Our Cause</h1>
			<div className="separator-container">
                <div className="separator line-separator"></div>
            </div>
            <div className= "row mission" >
				<div className= "col-md-12">
					<p>Tools With Impact's mission is to combat poverty in developing nations by providing underprivileged students with the necessary school supplies and equipment needed to attend and succeed in school.</p>
					<br/>
					<a href ="about.php"><button className= "btn btn-primary">Learn More About Our Organization</button></a>
					<a href ="donate.php"><button className= "btn btn-primary">Donate Now</button></a>
				</div>
			</div>
		</div>
	</section>
	<div className=  "container-fluid image-home-display image-home-display" id = "img-show">
		<div className= "col-md-4">
			<div className= "info-content">
				<img src="img/icons/diamond.png"/>
				<br/>
				<span className= "counter" data-from="0" data-to="12"></span>
	     		<h3>Schools</h3>
			</div>
		</div>
		<div className= "col-md-4">
			<div className= "info-content">
				<img src="img/icons/pin.png"/>
				<br/>
	     		<span className= "counter-prefix">$</span><span className= "counter" data-from="0" data-to="41000"></span>
	     		<h3>Donations</h3>
			</div>
		</div>
		<div className= "col-md-4">
			<div className= "info-content">
				<img src="img/icons/heart.png"/>
				<br/>
	     		<span className= "counter-prefix">$</span><span className= "counter" data-from="0" data-to="65000"></span>
	     		<h3>in Tools</h3>
			</div>
		</div>
	</div>
	<section className= "container" id = "join">
		<h1>Social Media</h1>
		<div className= "row social-media-button-group">
			<a target="blank" href ="https://www.facebook.com/toolswithimpact"><button className= "btn btn-primary text-center"><i className="fa fa-facebook"></i>Facebook</button></a>
			<a target="blank" href ="https://twitter.com/toolswithimpact"><button className= "btn btn-primary text-center"><i className="fa fa-twitter"></i>Twitter</button></a>
			<a target="blank" href ="https://www.instagram.com/toolswithimpact/"><button className= "btn btn-primary text-center"><i className="fa fa-instagram"></i>Instagram</button></a>
		</div>
		<div className="row social-feed-container-small">
		</div>
	</section>
	</div>
	);
  }
})